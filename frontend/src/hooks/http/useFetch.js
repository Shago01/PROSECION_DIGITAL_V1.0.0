import { useEffect, useState } from 'react';
import { API_URL } from '../../config/configenv';
import { axiosGetRequest } from '../../utils/http/axios';
import { useSelector } from 'react-redux';
import { ShowNotify } from '../../components/commons/shownotify';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!token) return;
    if (!url) return;

    let isMounted = true;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const [err, response] = await axiosGetRequest(API_URL + url, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (err) throw err;
        if (isMounted) setData(response.data);
        ShowNotify('success', `${response.message} ✅`);
      } catch (err) {
        if (isMounted) setError(err.msg);
        ShowNotify('danger', err.msg);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [token, url]);

  return { data, loading, error };
}

export default useFetch;
