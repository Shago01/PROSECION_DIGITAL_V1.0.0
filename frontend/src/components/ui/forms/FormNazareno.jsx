import {
  FaCalendar,
  FaCity,
  FaGlobe,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhone,
  FaUser,
  FaVenusMars,
} from 'react-icons/fa';
import Form from './Form';

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
      minLength: {
        value: 8,
        message: 'Debe tener al menos 8 caracteres',
      },
      maxLength: {
        value: 15,
        message: 'Debe tener máximo 15 caracteres',
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
      minLength: {
        value: 2,
        message: 'Debe tener al menos 2 caracteres',
      },
      trim: true,
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
      trim: true,
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
      minLength: {
        value: 2,
        message: 'Debe tener al menos 2 caracteres',
      },
      trim: true,
    },
  },
  {
    label: 'Segundo Apellido',
    icon: <FaUser className="text-gray-600" />,
    type: 'text',
    name: 'secondLastName',
    required: 'Este campo es obligatorio',
    validation: {
      required: 'Este campo es obligatorio',
      pattern: {
        value: /^[a-zA-Z\s]+$/,
        message: 'Solo se permiten letras y espacios',
      },
      minLength: {
        value: 2,
        message: 'Debe tener al menos 2 caracteres',
      },
      trim: true,
    },
  },
  {
    label: 'Fecha de Nacimiento',
    icon: <FaCalendar className="text-gray-600" />,
    type: 'date',
    name: 'birthdate',
    validation: {
      required: 'Este campo es obligatorio',
      validate: value => {
        const today = new Date();
        const birthDate = new Date(value);
        const age = today.getFullYear() - birthDate.getFullYear();
        if (birthDate > today) return 'La fecha no puede ser futura';
        if (age < 18) return 'Debe ser mayor de 18 años';
        return true;
      },
    },
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
      minLength: {
        value: 7,
        message: 'Debe tener al menos 7 dígitos',
      },
      maxLength: {
        value: 15,
        message: 'Debe tener máximo 15 dígitos',
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
      trim: true,
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
      trim: true,
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
      trim: true,
    },
  },
  {
    label: 'Dirección',
    icon: <FaMapMarkerAlt className="text-gray-600" />,
    type: 'text',
    name: 'address',
    validation: {
      required: 'Este campo es obligatorio',
      minLength: {
        value: 5,
        message: 'Debe tener al menos 5 caracteres',
      },
      pattern: {
        value: /^[a-zA-Z0-9\s,.-]+$/,
        message: 'Solo se permiten letras, números y (,.-)',
      },
      trim: true,
    },
  },
];

export default function FormNazareno({ onSubmit, defaultValues }) {
  return (
    <Form defaultValues={defaultValues} inputs={inputs} onSub={onSubmit} />
  );
}
