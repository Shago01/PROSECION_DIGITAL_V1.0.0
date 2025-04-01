export function SkeletonCard() {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full border border-gray-200 animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow bg-gray-300"></div>

        <div className="w-full">
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>{' '}
          <div className="h-6 bg-gray-400 rounded w-1/2 mb-2"></div>{' '}
          <div className="h-3 bg-gray-300 rounded w-1/4"></div>{' '}
        </div>
      </div>
    </div>
  );
}
