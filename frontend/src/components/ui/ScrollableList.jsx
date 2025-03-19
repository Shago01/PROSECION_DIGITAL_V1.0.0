import {
  FaMale,
  FaFemale,
  FaIdCard,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaBirthdayCake,
} from 'react-icons/fa';

import { COLORS } from '../../utils/constants/colorhex';

const NazarenoList = ({ users }) => {
  return (
    <div className="max-h-72 overflow-y-auto scrollbar-hide rounded-xl">
      {users.length > 0 ? (
        users.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow hover:translate-0.5 0 transition gap-4"
          >
            {/* Izquierda - Icono de sexo */}
            <div
              className="flex items-center justify-center w-9 h-9 bg-gray-200 rounded-full"
              s
            >
              {item.sex === 'M' ? (
                <FaMale style={{ color: COLORS.male }} />
              ) : (
                <FaFemale style={{ color: COLORS.female }} />
              )}
            </div>

            {/* Centro - Información principal */}
            <div className="flex-1 text-sm">
              <h3 className="font-semibold text-gray-800">
                {item.firstName} {item.middleName} {item.firstLastName}{' '}
                {item.secondLastName}
                <span className="text-xs ml-2 text-gray-500">{item.email}</span>
              </h3>

              <div className="grid grid-cols-2 gap-x-5 mt-1 text-xs text-gray-600">
                <div className="flex items-center">
                  <FaIdCard className="mr-1 text-gray-400" />
                  <span>
                    {item.documentType}: {item.documentNumber}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="mr-1 text-gray-400" />
                  <span>{item.phoneNumber}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-1 text-gray-400" />
                  <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <FaBirthdayCake className="mr-1 text-gray-400" />
                  <span>{item.age} años</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-1 text-gray-400" />
                  <span>
                    {item.address}, {item.city}, {item.country}
                  </span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-1 text-gray-400" />
                  <span>{item.department}</span>
                </div>
              </div>
            </div>

            {/* Derecha - Estado */}
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                item.active
                  ? 'text-green-700 bg-green-200'
                  : 'text-red-700 bg-red-200'
              }`}
            >
              {item.active ? 'Activo' : 'Inactivo'}
            </span>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">
          No hay usuarios disponibles.
        </p>
      )}
    </div>
  );
};

export { NazarenoList };
