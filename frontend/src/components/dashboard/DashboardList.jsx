import { SkeletonList } from '../skeleton/SkeletonList';
import { NazarenoList } from '../ui/ScrollableList';

export const DashboardList = ({ data, loading }) => {
  console.log(data);

  if (loading) {
    return (
      <>
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonList key={i} />
        ))}
      </>
    );
  }

  return <NazarenoList users={data?.cotent ?? []} />;
};
