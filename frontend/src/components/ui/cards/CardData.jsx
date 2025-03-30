import {
  FaCalendarAlt,
  FaCity,
  FaClock,
  FaEnvelope,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhone,
  FaTransgender,
} from 'react-icons/fa';
import { PiIdentificationCard } from 'react-icons/pi';

function DataRow({ icon: Icon, label }) {
  return (
    <p className="flex items-center gap-3 bg-gray-100 p-3 rounded-lg">
      {Icon && <Icon className="text-sm text-gray-600" />}
      {label}
    </p>
  );
}

export default function CardData({ data }) {
  return (
    <div className="mt-3 w-full max-w-lg bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center border border-gray-300">
      {/* Información en una sola fila */}
      <div className="flex flex-col gap-3 text-gray-800 text-md font-medium w-full">
        <p className="text-center font-extrabold text-xl text-gray-900 border-b pb-2 w-full flex flex-wrap justify-center items-center gap-3">
          {`${data.firstName} ${data.middleName || ''} ${data.firstLastName} ${
            data.secondLastName
          }`}
          <span
            className={`px-4 py-2 rounded-full text-lg font-semibold shadow-md ${
              data.active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {data.active ? 'Activo' : 'Inactivo'}
          </span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          <DataRow
            icon={FaIdCard}
            label={`${data.documentType}: ${data.documentNumber}`}
          />
          <DataRow
            icon={FaCalendarAlt}
            label={new Date(data.createdAt).toLocaleDateString()}
          />
          <DataRow icon={FaMapMarkerAlt} label={data.address} />
          <DataRow
            icon={FaCity}
            label={`${data.country}, ${data.department}, ${data.city}.`}
          />
          <DataRow icon={FaPhone} label={data.phoneNumber} />
          <DataRow icon={FaEnvelope} label={data.email || 'No disponible'} />
          <DataRow icon={FaTransgender} label={data.sex} />
          <DataRow icon={FaCalendarAlt} label={`${data.age} años`} />
          <DataRow icon={PiIdentificationCard} label={`${data.code} `} />
          <DataRow
            icon={FaClock}
            label={`${data.yearsActive} ${
              data.yearsActive === 1 ? 'año activo' : 'años activos'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
