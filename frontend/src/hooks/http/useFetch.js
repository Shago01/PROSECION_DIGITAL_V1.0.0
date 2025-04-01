import { useEffect, useState, useCallback } from 'react';
import { API_URL } from '../../config/configenv';
import { axiosGetRequest } from '../../utils/http/axios';
import { useSelector } from 'react-redux';
import { ShowNotify } from '../../components/commons/shownotify';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector(state => state.auth.token);

  const fetchData = useCallback(async () => {
    if (!token || !url) return;

    setLoading(true);
    setError(null);
    try {
      const [err, response] = await axiosGetRequest(API_URL + url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (err) throw err;
      setData(response.data);
      ShowNotify('success', `${response.message} `);
    } catch (err) {
      setError(err.msg);
      ShowNotify('danger', err.msg);
    } finally {
      setLoading(false);
    }
  }, [token, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}

export default useFetch;
