export default function Card({ title, value, subtitle, icon: Icon, colorHex }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center space-x-4">
        <div
          className="w-12 h-12 flex items-center justify-center rounded-lg shadow"
          style={{ backgroundColor: `${colorHex}20` }} // Fondo icónico más fuerte
        >
          {Icon && <Icon className="text-2xl" style={{ color: colorHex }} />}
        </div>
        <div>
          <h3 className="text-gray-700 text-sm font-medium">{title}</h3>
          <h2 className="text-xl font-bold" style={{ color: colorHex }}>
            {value}
          </h2>
          <span className="text-gray-500 text-xs">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
