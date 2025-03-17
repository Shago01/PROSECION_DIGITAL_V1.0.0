export function SkeletonCard() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-full border border-gray-300 animate-pulse">
      {/* Sección superior */}
      <div className="flex justify-between items-center">
        <div className="w-24 h-8 bg-gray-300 rounded"></div>
      </div>

      {/* Sección central (valor principal) */}
      <div className="mt-2 p-2">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-8 bg-gray-400 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
}
