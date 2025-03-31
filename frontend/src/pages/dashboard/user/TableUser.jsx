import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaSortUp, FaSyncAlt } from 'react-icons/fa';
import useFetch from '../../../hooks/http/useFetch';
import { tableCustomStyles } from '../nazarenos/NazarenoColumns';
import SkeletonTable from '../../../components/skeleton/SkeletonTable';
import { axiosDeleteRequest } from '../../../utils/http/axios';
import { API_URL } from '../../../config/configenv';
import { ShowNotify } from '../../../components/commons/shownotify';
import { useSelector } from 'react-redux';

export default function TableUser() {
  const token = useSelector(state => state.auth.token);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const { data, loading, refetch } = useFetch(
    `/api/user/query?page=${page}&limit=${limit}`,
  );

  const handleDeleteUser = async userId => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      const [err, _] = await axiosDeleteRequest(
        `${API_URL}/api/user/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (err) return ShowNotify('danger', err.msg);
      refetch();
    }
  };

  const UserColums = [
    {
      selector: row => row.name,
      id: 'Nombre',
      name: 'Nombre',
      sortable: true,
    },
    {
      selector: row => row.email,
      id: 'Correo Electrónico',
      name: 'Correo Electrónico',
      sortable: true,
    },
    {
      selector: row => row.username,
      id: 'Nombre de Usuario',
      name: 'Nombre de Usuario',
      sortable: true,
    },
    {
      selector: row => row.rol,
      id: 'Rol',
      name: 'Rol',
      cell: row => (
        <span
          className={`px-3 py-1 rounded-full text-white ${
            row.rol === 'admin'
              ? 'bg-blue-500'
              : row.rol === 'supervisor'
              ? 'bg-green-500'
              : row.rol === 'register'
              ? 'bg-yellow-500'
              : row.rol === 'root'
              ? 'bg-purple-500'
              : 'bg-gray-500'
          }`}
        >
          {row.rol}
        </span>
      ),
      sortable: true,
    },
    {
      id: 'Acciones',
      name: 'Acciones',
      cell: row => (
        <div className="flex flex-row gap-2">
          <button
            onClick={() => handleDeleteUser(row.id)}
            className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600 cursor-pointer"
          >
            Eliminar
          </button>
        </div>
      ),
      sortable: false,
    },
  ];

  return (
    <div className="w-full p-6 bg-white shadow-md rounded-lg overflow-auto scrollbar-hide sm:mr-4 sm:ml-4">
      <div className="flex justify-end mb-4">
        <button
          onClick={refetch}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <FaSyncAlt className="mr-2" /> Refrescar
        </button>
      </div>
      {loading ? (
        <SkeletonTable />
      ) : (
        <DataTable
          title="Usuarios en el sistema"
          columns={UserColums}
          data={data?.cotent || []}
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
            header: {
              style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#4A5568',
                backgroundColor: '#F7FAFC',
                padding: '10px',
              },
            },
            rows: {
              style: {
                fontSize: '14px',
                color: '#2D3748',
                '&:hover': {
                  backgroundColor: '#EDF2F7',
                },
              },
            },
          }}
          fixedHeader
          fixedHeaderScrollHeight="60vh"
        />
      )}
    </div>
  );
}
