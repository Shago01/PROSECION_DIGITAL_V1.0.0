import { useSelector } from 'react-redux';
import { ShowNotify } from '../../../components/commons/shownotify';
import { API_URL } from '../../../config/configenv';
import { axiosPostRequest } from '../../../utils/http/axios';
import FormNazareno from '../../../components/ui/forms/FormNazareno';

export const RegisterNazareno = () => {
  const token = useSelector(state => state.auth.token);

  const onSubmit = async data => {
    const [err, response] = await axiosPostRequest(
      API_URL + '/api/nazareno',
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (err) {
      ShowNotify('danger', err.msg);
      if (err.details.length != 0)
        err.details.forEach(({ msg }) => ShowNotify('warning', msg));
      return false;
    }

    ShowNotify('success', response.message);
    return true;
  };

  return (
    <div className="w-full max-w-5xl  bg-white shadow-lg rounded-lg  mx-auto p-8 overflow-auto scrollbar-hide">
      <h2 className="text-4xl  rounded-lg p-6 font-bold mb-10 text-center text-blue-400">
        Formulario de Registro
        <FormNazareno onSubmit={onSubmit} />
      </h2>
    </div>
  );
};
