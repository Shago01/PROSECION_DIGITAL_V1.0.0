import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { ShowNotify } from '../../commons/shownotify';

const Input = ({
  onBuscar,
  label,
  labelbtn,
  placeholder = 'Ingrese un valor',
  inputType = 'text',
  icon: Icon = FaSearch,
}) => {
  const [codigo, setCodigo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (codigo.trim() !== '') {
      onBuscar(codigo.trim());
    } else {
      ShowNotify('warning', 'Ingrese un cedula');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-2">
        <label className="text-gray-700 font-medium items-center ">
          {label}
        </label>
        <input
          type={inputType}
          value={codigo}
          onChange={e => setCodigo(e.target.value)}
          className="w-full border border-gray-300 mb-4 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          placeholder={placeholder}
        />
        <button
          type="submit"
          className="w-full mt-3 bg-blue-500 text-white p-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-600 active:shadow-inner transform active:translate-y-1 transition-all "
        >
          {Icon && <Icon />} {labelbtn}
        </button>
      </form>
    </div>
  );
};

export default Input;
