import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaSortUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ShowNotify } from '../../../components/commons/shownotify';
import SkeletonTable from '../../../components/skeleton/SkeletonTable';
import Modal from '../../../components/ui/modals/Modal';
import { API_URL } from '../../../config/configenv';
import useFetch from '../../../hooks/http/useFetch';
import { axiosGetRequest, axiosPutRequest } from '../../../utils/http/axios';
import {
  exportNazarenosData,
  filterNazarenosData,
} from '../../../utils/nazarenosUtils';
import { NazarenoColumns, tableCustomStyles } from './NazarenoColumns';
import NazarenoSearchBar from './NazarenoSearchBar';

function NazarenoTable() {
  const token = useSelector(state => state.auth.token);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSecondConfirmation, setShowSecondConfirmation] = useState(false); // Nuevo estado
  const { data, loading, refetch } = useFetch(
    `/api/nazareno/query?page=${page}&limit=${limit}`,
  );

  const onExportExcel = () =>
    exportNazarenosData(token, axiosGetRequest, API_URL, ShowNotify);

  const handleResetNazarenos = async () => {
    const [err] = await axiosPutRequest(`${API_URL}/api/nazareno/reset`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (err) {
      ShowNotify('danger', err.msg);
    } else {
      ShowNotify('success', 'Todos los nazarenos han sido desactivados');
      setShowSecondConfirmation(false);
      setShowModal(false);
      refetch();
    }
  };

  const RenderModalContent = ({ onConfirm, onClose }) => (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        Advertencia
      </h2>
      <p className="text-gray-600 mt-2">
        Está a punto de resetear todos los valores de estado de los nazarenos en
        la base de datos, esto establecerá el valor de{' '}
        <span className="text-red-700 font-bold">INACTIVO</span> para cada uno
        de los registros existentes.
      </p>
      <div className="flex justify-end mt-6 space-x-4 gap-4">
        <button
          className="px-5 cursor-pointer py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all"
          onClick={onConfirm}
        >
          Confirmar
        </button>
        <button
          className="px-5 cursor-pointer py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition-all"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  const RenderSecondConfirmation = ({ onConfirm, onClose }) => (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto">
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        Confirmación Final
      </h2>
      <p className="text-gray-600 mt-2">
        ¿Está completamente seguro de que desea resetear todos los valores de
        estado de los nazarenos? Esta acción no se puede deshacer.
      </p>
      <div className="flex justify-end mt-6 space-x-4 gap-4">
        <button
          className="px-5 cursor-pointer py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all"
          onClick={onConfirm}
        >
          Sí, estoy seguro
        </button>
        <button
          className="px-5 cursor-pointer py-2 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition-all"
          onClick={onClose}
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  const filteredData = filterNazarenosData(data, search);

  return loading ? (
    <SkeletonTable />
  ) : (
    <div className="w-full p-4 bg-white shadow-lg rounded-lg overflow-auto scrollbar-hide sm:mr-4 sm:ml-4">
      <NazarenoSearchBar
        search={search}
        setSearch={setSearch}
        handleExport={onExportExcel}
        handleResetNaz={() => setShowModal(true)}
      />

      <DataTable
        title="Nazarenos Registrados"
        columns={NazarenoColumns}
        data={filteredData}
        pagination
        paginationServer
        paginationTotalRows={data?.total || 0}
        paginationDefaultPage={page}
        paginationRowsPerPageOptions={[25, 50, 100]}
        paginationPerPage={limit}
        onChangePage={setPage}
        onChangeRowsPerPage={(newLimit, page) => {
          setLimit(newLimit);
          setPage(page);
        }}
        highlightOnHover
        pointerOnHover
        sortIcon={<FaSortUp />}
        customStyles={{
          ...tableCustomStyles,
          tableWrapper: {
            style: {
              overflowX: 'auto',
            },
          },
        }}
        fixedHeader
        fixedHeaderScrollHeight="60vh"
      />

      {showModal && (
        <Modal
          componetPrint={
            <RenderModalContent
              onConfirm={() => {
                setShowModal(false);
                setShowSecondConfirmation(true);
              }}
              onClose={() => setShowModal(false)}
            />
          }
          onClose={() => setShowModal(false)}
        />
      )}

      {showSecondConfirmation && (
        <Modal
          componetPrint={
            <RenderSecondConfirmation
              onConfirm={handleResetNazarenos}
              onClose={() => setShowSecondConfirmation(false)}
            />
          }
          onClose={() => setShowSecondConfirmation(false)}
        />
      )}
    </div>
  );
}

export default NazarenoTable;
