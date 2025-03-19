export const SkeletonList = () => (
  <div className="flex items-center justify-between p-3 mb-2 bg-white animate-pulse rounded-lg gap-4">
    {/* Izquierda - Icono de sexo */}
    <div className="w-9 h-9 bg-gray-300 rounded-full" />

    {/* Centro - Información principal */}
    <div className="flex-1 text-sm">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="grid grid-cols-2 gap-x-5 mt-1 text-xs text-gray-600">
        <div className="h-3 bg-gray-300 rounded w-5/6 mb-1" />
        <div className="h-3 bg-gray-300 rounded w-5/6 mb-1" />
        <div className="h-3 bg-gray-300 rounded w-4/6 mb-1" />
        <div className="h-3 bg-gray-300 rounded w-4/6 mb-1" />
        <div className="h-3 bg-gray-300 rounded w-3/6 mb-1" />
        <div className="h-3 bg-gray-300 rounded w-3/6 mb-1" />
      </div>
    </div>

    {/* Derecha - Estado */}
    <div className="w-16 h-6 bg-gray-300 rounded-full" />
  </div>
);
