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
import { COLORS } from '../../utils/constants/colorhex';

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
        colorHex={COLORS.female}
        subtitle={'Número de nazarenos femeninos'}
        className={' flex flex-col justify-center'}
      />
      <Card
        icon={FaMale}
        title={'Masculino'}
        value={data.totalMas}
        colorHex={COLORS.male}
        subtitle={'Número de nazarenos masculinos'}
        className={'h-64 flex flex-col justify-center'}
      />
      <Card
        icon={FaUsers}
        title={'Total'}
        value={data.total}
        colorHex={COLORS.total}
        subtitle={'Número total de nazarenos'}
        className={'h-52 flex flex-col justify-center'}
      />
      <Card
        icon={FaUserCheck}
        title={'Activos'}
        value={data.active}
        colorHex={COLORS.active}
        subtitle={'Número de nazarenos activos'}
        className={'h-52 flex flex-col justify-center'}
      />
      <Card
        icon={FaUserTimes}
        title={'Inactivos'}
        value={data.inactive}
        colorHex={COLORS.inactive}
        subtitle={'Número de nazarenos inactivos'}
        className={'h-52 flex flex-col justify-center'}
      />
    </>
  );

  return (
    <div className="flex flex-col flex-grow mr-2 ml-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full ">
        {card}
      </div>
    </div>
  );
}

export default DashboardHome;
