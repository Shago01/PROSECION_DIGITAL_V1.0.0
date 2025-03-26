import { useState } from 'react';

const Input = ({ onBuscar, label, labelbtn }) => {
  const [codigo, setCodigo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (codigo.trim() !== '') {
      onBuscar(codigo);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-2">
        <label className="text-gray-700 font-medium items-center ">
          {label}
        </label>
        <input
          type="text"
          value={codigo}
          onChange={e => setCodigo(e.target.value)}
          className="w-full border border-gray-300 mb-4 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
          placeholder="Ingrese la cédula"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200 shadow-md"
        >
          {labelbtn}
        </button>
      </form>
    </div>
  );
};

export default Input;
