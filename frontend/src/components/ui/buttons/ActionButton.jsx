export default function ActionButton({
  label,
  bgColor,
  hoverColor,
  handleclick,
}) {
  return (
    <button
      onClick={handleclick}
      className={`px-5 cursor-pointer py-3 ${bgColor} ${hoverColor} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl active:shadow-inner transform active:translate-y-1 transition-all`}
    >
      {label}
    </button>
  );
}
