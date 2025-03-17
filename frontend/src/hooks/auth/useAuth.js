import { useDispatch } from 'react-redux';
import { ShowNotify } from '../../components/commons/shownotify';
import { API_URL } from '../../config/configenv';
import { axiosPostRequest } from '../../utils/http/axios';
import { login, logout } from '../../providers/global/feature/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();
  const apipath = `${API_URL}/api/user/login`;

  const loginUser = async datareq => {
    const [err, resdata] = await axiosPostRequest(apipath, datareq);
    if (err) {
      const { msg } = err;
      ShowNotify('danger', `${msg} ❌ `);
      return;
    }
    const { message, data } = resdata;
    dispatch(login(data.auth));
    ShowNotify('success', `${message} ✅`);
  };
  const logoutUser = () => {
    dispatch(logout());
    ShowNotify('success', 'Sesión cerrada ✅');
  };
  return { loginUser, logoutUser };
};

export default useAuth;
