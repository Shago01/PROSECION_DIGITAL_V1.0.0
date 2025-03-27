import {
  FaMale,
  FaFemale,
  FaIdCard,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaBirthdayCake,
} from 'react-icons/fa';
import { COLORS } from '../../../utils/constants/colorhex';

function ListItem({ item }) {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow hover:translate-0.5 0 transition gap-4">
      {/* Izquierda - Icono de sexo */}
      <div className="flex items-center justify-center w-9 h-9 bg-gray-200 rounded-full">
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
          <InfoItem
            icon={<FaIdCard />}
            text={`${item.documentType}: ${item.documentNumber}`}
          />
          <InfoItem icon={<FaPhone />} text={item.phoneNumber} />
          <InfoItem
            icon={<FaCalendarAlt />}
            text={new Date(item.createdAt).toLocaleDateString()}
          />
          <InfoItem icon={<FaBirthdayCake />} text={`${item.age} años`} />
          <InfoItem
            icon={<FaMapMarkerAlt />}
            text={`${item.address}, ${item.city}, ${item.country}`}
          />
          <InfoItem icon={<FaMapMarkerAlt />} text={item.department} />
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
  );
}

function InfoItem({ icon, text }) {
  return (
    <div className="flex items-center">
      <span className="mr-1 text-gray-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

const NazarenoList = ({ users }) => {
  return (
    <div className="max-h-72 overflow-y-auto scrollbar-hide rounded-xl">
      {users.length > 0 ? (
        users.map((item, index) => <ListItem key={index} item={item} />)
      ) : (
        <p className="text-center text-gray-500">
          No hay usuarios disponibles.
        </p>
      )}
    </div>
  );
};

export { NazarenoList };
