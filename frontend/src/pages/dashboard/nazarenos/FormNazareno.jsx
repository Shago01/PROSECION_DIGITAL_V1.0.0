import { useForm } from 'react-hook-form';
import {
  FaIdCard,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaCity,
  FaMap,
  FaCalendar,
  FaVenusMars,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { axiosPostRequest } from '../../../utils/http/axios';
import { ShowNotify } from '../../../components/commons/shownotify';
import { API_URL } from '../../../config/configenv';

const inputs = [
  {
    label: 'Tipo de Documento',
    icon: <FaIdCard className="text-gray-600" />,
    type: 'select',
    name: 'documentType',
    options: [
      { value: 'CC', label: 'Cédula de Ciudadanía' },
      { value: 'TI', label: 'Tarjeta de Identidad' },
      { value: 'PP', label: 'Pasaporte' },
    ],
    validation: { required: 'Este campo es obligatorio' },
  },
  {
    label: 'Sexo',
    icon: <FaVenusMars className="text-gray-600" />,
    type: 'select',
    name: 'sex',
    options: [
      { value: 'M', label: 'Masculino' },
      { value: 'F', label: 'Femenino' },
    ],
    validation: { required: 'Este campo es obligatorio' },
  },
  {
    label: 'Número de Documento',
    icon: <FaIdCard className="text-gray-600" />,
    type: 'text',
    name: 'documentNumber',
    validation: {
      required: 'Este campo es obligatorio',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Solo se permiten números',
      },
    },
  },
  {
    label: 'Primer Nombre',
    icon: <FaUser className="text-gray-600" />,
    type: 'text',
    name: 'firstName',
    validation: {
      required: 'Este campo es obligatorio',
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
    },
  },
  {
    label: 'Segundo Nombre',
    icon: <FaUser className="text-gray-600" />,
    type: 'text',
    name: 'middleName',
    validation: {
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
    },
  },
  {
    label: 'Primer Apellido',
    icon: <FaUser className="text-gray-600" />,
    type: 'text',
    name: 'firstLastName',
    validation: {
      required: 'Este campo es obligatorio',
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
    },
  },
  {
    label: 'Segundo Apellido',
    icon: <FaUser className="text-gray-600" />,
    type: 'text',
    name: 'secondLastName',
    validation: {
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
    },
  },
  {
    label: 'Fecha de Nacimiento',
    icon: <FaCalendar className="text-gray-600" />,
    type: 'date',
    name: 'birthdate',
    validation: { required: 'Este campo es obligatorio' },
  },
  {
    label: 'Teléfono',
    icon: <FaPhone className="text-gray-600" />,
    type: 'text',
    name: 'phoneNumber',
    validation: {
      required: 'Este campo es obligatorio',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Solo se permiten números',
      },
    },
  },
  {
    label: 'País',
    icon: <FaGlobe className="text-gray-600" />,
    type: 'text',
    name: 'country',
    validation: {
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
    },
  },
  {
    label: 'Departamento',
    icon: <FaCity className="text-gray-600" />,
    type: 'text',
    name: 'department',
    validation: {
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
    },
  },
  {
    label: 'Ciudad',
    icon: <FaCity className="text-gray-600" />,
    type: 'text',
    name: 'city',
    validation: {
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
    },
  },
  {
    label: 'Dirección',
    icon: <FaMapMarkerAlt className="text-gray-600" />,
    type: 'text',
    name: 'address',
    validation: { required: 'Este campo es obligatorio' },
  },
];

export const FormNazareno = () => {
  const token = useSelector(state => state.auth.token);
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
      return;
    }
    ShowNotify('success', response.message);
    reset();
  };

  return (
    <div className="w-full max-w-5xl  bg-white shadow-lg rounded-lg  mx-auto p-8 overflow-auto scrollbar-hide">
      <h2 className="text-4xl  rounded-lg p-6 font-bold mb-10 text-center text-blue-400">
        Formulario de Registro
      </h2>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inputs.map((field, index) => (
            <div key={index}>
              <label className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                {field.icon}
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  {...register(field.name, field.validation)}
                  className="border border-gray-300 w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {field.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  {...register(field.name, field.validation)}
                  className="border border-gray-300 w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              {errors[field.name] && (
                <p className="text-red-500 text-sm mt-2">
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
