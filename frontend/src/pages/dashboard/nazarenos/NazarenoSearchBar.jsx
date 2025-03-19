// src/components/nazareno/NazarenoSearchBar.js
import { FaSearch, FaFileExcel } from 'react-icons/fa';

function NazarenoSearchBar({ search, setSearch, handleExport }) {
  return (
    <div className="relative mb-4 gap-4 flex items-center">
      <div className="relative flex-grow">
        <FaSearch className="absolute left-3 top-2 text-gray-500" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 shadow rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Buscar por Código o Número de Documento..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <button
        className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md flex items-center hover:bg-green-700 transition-all duration-200"
        onClick={handleExport}
      >
        <FaFileExcel className="mr-2" />
        Exportar a Excel
      </button>
    </div>
  );
}

export default NazarenoSearchBar;
