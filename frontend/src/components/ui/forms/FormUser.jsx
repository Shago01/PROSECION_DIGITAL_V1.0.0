import { FaEnvelope, FaKey, FaUser, FaUserShield } from 'react-icons/fa';
import Form from './Form';

const inputs = [
  {
    label: 'Nombre',
    icon: <FaUser className="text-gray-600" />,
    type: 'text',
    name: 'name',
    validation: {
      required: 'Este campo es obligatorio',
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
      maxLength: {
        value: 50,
        message: 'No puede exceder los 50 caracteres',
      },
    },
  },
  {
    label: 'Correo Electrónico',
    icon: <FaEnvelope className="text-gray-600" />,
    type: 'email',
    name: 'email',
    validation: {
      required: 'Este campo es obligatorio',
      pattern: {
        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        message: 'Correo electrónico no válido',
      },
      maxLength: {
        value: 100,
        message: 'No puede exceder los 100 caracteres',
      },
    },
  },
  {
    label: 'Nombre de Usuario',
    icon: <FaUser className="text-gray-600" />,
    type: 'text',
    name: 'username',
    validation: {
      required: 'Este campo es obligatorio',
      pattern: {
        value: /^[a-zA-Z0-9._-]+$/,
        message:
          'Solo se permiten letras, números, puntos, guiones y guiones bajos',
      },
      minLength: {
        value: 3,
        message: 'Debe tener al menos 3 caracteres',
      },
      maxLength: {
        value: 30,
        message: 'No puede exceder los 30 caracteres',
      },
    },
  },
  {
    label: 'Contraseña',
    icon: <FaKey className="text-gray-600" />,
    type: 'text',
    name: 'password',
    validation: {
      required: 'Este campo es obligatorio',
      minLength: {
        value: 6,
        message: 'Debe tener al menos 6 caracteres',
      },
      maxLength: {
        value: 20,
        message: 'No puede exceder los 20 caracteres',
      },
      pattern: {
        value:
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/,
        message:
          'Debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@ # $ % ^ & * ! )',
      },
    },
  },
  {
    label: 'Rol',
    icon: <FaUserShield className="text-gray-600" />,
    type: 'select',
    name: 'rol',
    options: [
      { value: 'admin', label: 'Administrador' },
      { value: 'supervisor', label: 'Supervisor' },
      { value: 'register', label: 'Registrador' },
      { value: 'root', label: 'Super Administrador' },
      { value: 'consultant', label: 'Consultor' },
    ],
    validation: { required: 'Este campo es obligatorio' },
  },
];

export default function FormUser({ onSubmit, defaultValues }) {
  return (
    <Form defaultValues={defaultValues} inputs={inputs} onSub={onSubmit} />
  );
}
