import { FaFileExcel, FaSearch, FaSyncAlt } from 'react-icons/fa';
import { RiResetLeftLine } from 'react-icons/ri';

function NazarenoSearchBar({
  search,
  setSearch,
  handleExport,
  handleResetNaz,
  refetch,
}) {
  return (
    <div className="relative mb-4 gap-4 flex flex-wrap items-center">
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
        className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md flex items-center hover:bg-green-700 transition-all duration-200 cursor-pointer"
        onClick={handleExport}
      >
        <FaFileExcel className="mr-2" />
        Exportar a Excel
      </button>
      <button
        className="ml-2 px-4 py-2 bg-amber-600 text-white rounded-md flex items-center hover:bg-amber-700 transition-all duration-200 cursor-pointer"
        onClick={handleResetNaz}
      >
        <RiResetLeftLine className="mr-2" />
        Reset activo
      </button>
      <button
        onClick={refetch}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
      >
        <FaSyncAlt className="mr-2" /> Refrescar
      </button>
    </div>
  );
}

export default NazarenoSearchBar;
