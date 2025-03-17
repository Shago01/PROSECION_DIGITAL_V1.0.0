import {
  FaFemale,
  FaMale,
  FaUserCheck,
  FaUsers,
  FaUserTimes,
} from 'react-icons/fa';
import { SkeletonCard } from '../../components/skeleton/SkeletonCard';
import Card from '../../components/ui/Card';
import useFetch from '../../hooks/http/useFetch';

function DashboardHome() {
  const { data, loading } = useFetch('/api/nazareno/analytics');

  const card = loading ? (
    Array(6)
      .fill('a')
      .map(value => <SkeletonCard val={value} />)
  ) : (
    <>
      <Card
        icon={FaFemale}
        title={'Femenino'}
        value={data.totalFem}
        colorText={'text-pink-400'}
        subtitle={'Número de nazarenos femeninos'}
        className={'h-64 flex flex-col justify-center'}
      />
      <Card
        icon={FaMale}
        title={'Masculino'}
        value={data.totalMas}
        colorText={'text-blue-400'}
        subtitle={'Número de nazarenos masculinos'}
        className={'h-64 flex flex-col justify-center'}
      />
      <Card
        icon={FaUsers}
        title={'Total'}
        value={data.total}
        colorText={'text-green-400'}
        subtitle={'Número total de nazarenos'}
        className={'h-64 flex flex-col justify-center'}
      />
      <Card
        icon={FaUserCheck}
        title={'Activos'}
        value={data.active}
        colorText={'text-green-500'}
        subtitle={'Número de nazarenos activos'}
        className={'h-64 flex flex-col justify-center'}
      />
      <Card
        icon={FaUserTimes}
        title={'Inactivos'}
        value={data.inactive}
        colorText={'text-red-500'}
        subtitle={'Número de nazarenos inactivos'}
        className={'h-64 flex flex-col justify-center'}
      />
    </>
  );

  return (
    <div className="flex flex-col flex-grow p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full ">
        {card}
      </div>
    </div>
  );
}

export default DashboardHome;
