import { DashboardCards } from '../../components/dashboard/DashboardCards';
import { DashboardList } from '../../components/dashboard/DashboardList';
import useFetch from '../../hooks/http/useFetch';

function DashboardHome() {
  const { data, loading } = useFetch('/api/nazareno/analytics');
  const { data: dataNaz, loading: loadingNaz } = useFetch(
    '/api/nazareno/query?page=1&limit=10',
  );

  return (
    <div className="flex flex-col flex-grow mx-2 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        <DashboardCards data={data} loading={loading} />
      </div>
      <div className="grid grid-cols-1 gap-1 w-full">
        <DashboardList data={dataNaz} loading={loadingNaz} />
      </div>
    </div>
  );
}

export default DashboardHome;
