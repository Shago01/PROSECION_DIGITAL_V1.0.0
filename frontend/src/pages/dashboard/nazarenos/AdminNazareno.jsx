import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import SkeletonCardData from '../../../components/skeleton/SkeletonCardData';
import ActionButton from '../../../components/ui/buttons/ActionButton';
import CardData from '../../../components/ui/cards/CardData';
import Input from '../../../components/ui/inputs/Input';
import Modal from '../../../components/ui/modals/Modal';
import useFetch from '../../../hooks/http/useFetch';
import FormNazareno from '../../../components/ui/forms/FormNazareno';

export default function AdminNazareno() {
  const [endpoint, setEndpoint] = useState(null);
  const { data, loading } = useFetch(endpoint);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = documentNumber => {
    setEndpoint(`/api/nazareno/by-doc/${documentNumber}`);
  };

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmint = data => {
    console.log(data);
    console.log('actualizando al nazareno');
    handleCloseModal();
  };

  const print = {
    skeleton: <SkeletonCardData />,
    componentprint: (
      <>
        <div className="flex flex-col justify-center items-center">
          <CardData data={data} />
          <div className="flex justify-center gap-4 mt-6">
            <ActionButton
              label="Actualizar"
              bgColor="bg-green-500"
              hoverColor="hover:bg-green-600"
              handleclick={handleUpdateClick}
            />
            <ActionButton
              label="Borrar"
              bgColor="bg-red-500"
              hoverColor="hover:bg-red-600"
              // handleclick={onDeleteClick}
            />
          </div>
        </div>
      </>
    ),
  };

  return (
    <div className="w-full mr-4 ml-4 p-2 flex gap-8 overflow-auto relative">
      <InputSection onSearch={handleSearch} />
      <DataSection data={data} loading={loading} print={print} />
      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          componetPrint={
            <FormNazareno defaultValues={data} onSubmit={handleSubmint} />
          }
        />
      )}
    </div>
  );
}

function InputSection({ onSearch }) {
  return (
    <div className="flex flex-col items-center space-y-6 w-1/3 p-6 bg-white rounded-xl shadow-md">
      <div className="w-32 h-32 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-300 ring-2 ring-white">
        <FaUser className="text-gray-600 text-6xl drop-shadow-md" />
      </div>
      <Input
        label="Ingrese la cédula del nazareno"
        labelbtn="Buscar"
        onBuscar={onSearch}
      />
    </div>
  );
}

function DataSection({ data, loading, print: { skeleton, componentprint } }) {
  return (
    <div className="flex-1 p-6 bg-white rounded-xl shadow-md">
      {loading && skeleton}
      {!loading && data && componentprint}
      {!loading && !data && skeleton}
    </div>
  );
}
