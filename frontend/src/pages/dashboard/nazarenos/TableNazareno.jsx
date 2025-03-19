import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import useFetch from '../../../hooks/http/useFetch';
import SkeletonTable from '../../../components/skeleton/SkeletonTable';
import { axiosGetRequest } from '../../../utils/http/axios';
import { API_URL } from '../../../config/configenv';
import NazarenoSearchBar from './NazarenoSearchBar';
import { nazarenoColumns, tableCustomStyles } from './NazarenoColumns';

function NazarenoTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [search, setSearch] = useState('');
  const { data, loading } = useFetch(
    `/api/nazareno/query?page=${page}&limit=${limit}`,
  );
  const token = useSelector(state => state.auth.token);

  const handleExport = async () => {
    try {
      const [err, response] = await axiosGetRequest(
        API_URL + '/api/nazareno/excelData',
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: 'blob',
        },
      );

      if (err) throw new Error('Error al descargar el archivo');

      const url = window.URL.createObjectURL(
        new Blob([response], { type: response.type }),
      );
      const link = document.createElement('a');
      link.href = url;
      link.download = 'nazarenos.xlsx';
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredData =
    data?.cotent?.filter(
      row =>
        row.code?.toString().toLowerCase().includes(search.toLowerCase()) ||
        row.documentNumber
          ?.toString()
          .toLowerCase()
          .includes(search.toLowerCase()),
    ) || [];

  return loading ? (
    <SkeletonTable />
  ) : (
    <div className="w-full mr-4 ml-4 bg-white shadow-lg rounded-lg overflow-auto p-4">
      <NazarenoSearchBar
        search={search}
        setSearch={setSearch}
        handleExport={handleExport}
      />

      <DataTable
        title="Nazarenos Registrados"
        columns={nazarenoColumns}
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
        customStyles={tableCustomStyles}
        fixedHeader
        fixedHeaderScrollHeight="340px"
      />
    </div>
  );
}

export default NazarenoTable;
