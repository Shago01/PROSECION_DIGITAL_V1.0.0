import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaSortUp } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ShowNotify } from '../../../components/commons/shownotify';
import SkeletonTable from '../../../components/skeleton/SkeletonTable';
import { API_URL } from '../../../config/configenv';
import useFetch from '../../../hooks/http/useFetch';
import { axiosGetRequest } from '../../../utils/http/axios';
import {
  exportNazarenosData,
  filterNazarenosData,
} from '../../../utils/nazarenosUtils';
import { NazarenoColumns, tableCustomStyles } from './NazarenoColumns';
import NazarenoSearchBar from './NazarenoSearchBar';

function NazarenoTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [search, setSearch] = useState('');
  const { data, loading } = useFetch(
    `/api/nazareno/query?page=${page}&limit=${limit}`,
  );
  const token = useSelector(state => state.auth.token);

  const handleExport = () =>
    exportNazarenosData(token, axiosGetRequest, API_URL, ShowNotify);

  const filteredData = filterNazarenosData(data, search);

  return loading ? (
    <SkeletonTable />
  ) : (
    <div className="w-full p-4  bg-white shadow-lg rounded-lg overflow-auto scrollbar-hide sm:mr-4 sm:ml-4">
      <NazarenoSearchBar
        search={search}
        setSearch={setSearch}
        handleExport={handleExport}
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
    </div>
  );
}

export default NazarenoTable;
