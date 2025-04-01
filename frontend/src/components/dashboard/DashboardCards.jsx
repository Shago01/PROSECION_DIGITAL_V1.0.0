import {
  FaFemale,
  FaMale,
  FaUserCheck,
  FaUsers,
  FaUserTimes,
} from 'react-icons/fa';
import { SkeletonCard } from '../skeleton/SkeletonCard';
import Card from '../ui/cards/Card';
import { COLORS } from '../../utils/constants/colorhex';

const cardConfig = [
  {
    icon: FaFemale,
    title: 'Femenino',
    key: 'totalFem',
    color: COLORS.female,
    subtitle: 'Número de nazarenos femeninos',
  },
  {
    icon: FaMale,
    title: 'Masculino',
    key: 'totalMas',
    color: COLORS.male,
    subtitle: 'Número de nazarenos masculinos',
  },
  {
    icon: FaUsers,
    title: 'Total',
    key: 'total',
    color: COLORS.total,
    subtitle: 'Número total de nazarenos',
  },
  {
    icon: FaUserCheck,
    title: 'Activos',
    key: 'active',
    color: COLORS.active,
    subtitle: 'Número de nazarenos activos',
  },
  {
    icon: FaUserTimes,
    title: 'Inactivos',
    key: 'inactive',
    color: COLORS.inactive,
    subtitle: 'Número de nazarenos inactivos',
  },
];

export const DashboardCards = ({ data, loading }) => {
  if (loading) {
    return (
      <>
        {Array.from({ length: cardConfig.length }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </>
    );
  }

  return (
    <>
      {cardConfig.map(({ icon, title, key, color, subtitle }) => (
        <Card
          key={key}
          icon={icon}
          title={title}
          value={data?.[key] ?? 0}
          colorHex={color}
          subtitle={subtitle}
          className="h-52 flex flex-col justify-center"
        />
      ))}
    </>
  );
};
