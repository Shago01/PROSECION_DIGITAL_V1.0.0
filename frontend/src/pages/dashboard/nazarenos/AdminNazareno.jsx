import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import SkeletonCardData from '../../../components/skeleton/SkeletonCardData';
import CardData from '../../../components/ui/CardData';
import Input from '../../../components/ui/input';
import useFetch from '../../../hooks/http/useFetch';

export default function AdminNazareno() {
  const [endpoint, setEndpoint] = useState(null);
  const { data, loading } = useFetch(endpoint);

  const handleSearch = documentNumber => {
    setEndpoint(`/api/nazareno/by-doc/${documentNumber}`);
  };

  return (
    <div className="w-full mr-4 ml-4 p-2 flex gap-8 overflow-auto">
      <InputSection onSearch={handleSearch} />
      <DataSection data={data} loading={loading} />
    </div>
  );
}

function InputSection({ onSearch }) {
  return (
    <div className="flex flex-col items-center space-y-6 w-1/3 p-6 bg-white rounded-xl shadow-md">
      <ProfileIcon />
      <Input
        label="Ingrese la cédula del nazareno"
        labelbtn="Buscar"
        onBuscar={onSearch}
      />
    </div>
  );
}

function ProfileIcon() {
  return (
    <div className="w-32 h-32 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-300 ring-2 ring-white">
      <FaUser className="text-gray-600 text-6xl drop-shadow-md" />
    </div>
  );
}

function DataSection({ data, loading }) {
  if (loading) {
    return (
      <div className="flex-1 p-6 bg-white rounded-xl shadow-md">
        <SkeletonCardData />
      </div>
    );
  }

  if (data) {
    return (
      <div className="flex-1 p-6 bg-white rounded-xl shadow-md">
        <NazarenoData data={data} />
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 bg-white rounded-xl shadow-md">
      <SkeletonCardData />
    </div>
  );
}

function NazarenoData({ data }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <CardData data={data} />
      <ActionButtons />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <ActionButton
        label="Actualizar"
        bgColor="bg-green-500"
        hoverColor="hover:bg-green-600"
      />
      <ActionButton
        label="Borrar"
        bgColor="bg-red-500"
        hoverColor="hover:bg-red-600"
      />
    </div>
  );
}

function ActionButton({ label, bgColor, hoverColor }) {
  return (
    <button
      className={`px-5 cursor-pointer py-3 ${bgColor} ${hoverColor} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl active:shadow-inner transform active:translate-y-1 transition-all`}
    >
      {label}
    </button>
  );
}
