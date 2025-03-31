import { useSelector } from 'react-redux';
import FormUser from '../../../components/ui/forms/FormUser';
import { axiosPostRequest } from '../../../utils/http/axios';
import { API_URL } from '../../../config/configenv';
import { ShowNotify } from '../../../components/commons/shownotify';

export default function RegisterUser() {
  const token = useSelector(sate => sate.auth.token);
  const handleSumit = async data => {
    const [err, response] = await axiosPostRequest(
      `${API_URL}/api/user/newUser`,
      data,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    if (err) return ShowNotify('danger', err.msg);

    ShowNotify('success', response.message);
    return true;
  };

  return (
    <div className="w-full max-w-5xl  bg-white shadow-lg rounded-lg  mx-auto p-2 overflow-auto scrollbar-hide">
      <h2 className="text-4xl  rounded-lg p-6 font-bold mb-10 text-center text-blue-400">
        Formulario de Registro Usuario
        <FormUser onSubmit={handleSumit} />
      </h2>
    </div>
  );
}
