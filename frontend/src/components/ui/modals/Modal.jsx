export default function Modal({ onClose, componetPrint }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-xl shadow-2xl  w-full sm:max-w-3xl max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 flex items-center justify-center transition duration-300 cursor-pointer"
          >
            &times;
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Actualizar Nazareno
        </h2>
        <div className="text-gray-700">{componetPrint}</div>
      </div>
    </div>
  );
}
