export default function Card({
  title,
  value,
  subtitle,
  icon: Icon,
  colorText,
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-full border border-gray-300">
      <div className="flex justify-between items-center">
        <div className="w-24 h-8 flex font-semibold">
          {Icon && <Icon className={`text-4xl  ${colorText}`} />}
        </div>
      </div>

      <div className="mt-2 p-2">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <h2 className={`text-3xl font-bold ${colorText}`}>{value}</h2>
        <span className="text-gray-500 text-sm">{subtitle}</span>
      </div>
    </div>
  );
}
