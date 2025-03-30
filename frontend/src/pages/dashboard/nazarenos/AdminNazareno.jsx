import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { ShowNotify } from '../../../components/commons/shownotify';
import SkeletonCardData from '../../../components/skeleton/SkeletonCardData';
import ActionButton from '../../../components/ui/buttons/ActionButton';
import CardData from '../../../components/ui/cards/CardData';
import FormNazareno from '../../../components/ui/forms/FormNazareno';
import Input from '../../../components/ui/inputs/Input';
import Modal from '../../../components/ui/modals/Modal';
import useFetch from '../../../hooks/http/useFetch';
import { axiosPatchRequest } from '../../../utils/http/axios';
import { API_URL } from '../../../config/configenv';

export default function AdminNazareno() {
  const token = useSelector(state => state.auth.token);
  const [endpoint, setEndpoint] = useState(null);
  const { data, loading } = useFetch(endpoint);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(data);

  const handleSearch = documentNumber => {
    if (endpoint && documentNumber === endpoint.split('/')[4]) {
      ShowNotify('warning', 'Ingrese un número de cedula diferente');
      return;
    }
    setEndpoint(`/api/nazareno/by-doc/${documentNumber}`);
  };

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    handleCloseModal();
  };

  const onActiveClick = async () => {
    const [err, response] = await axiosPatchRequest(
      API_URL + `/api/nazareno/active/${data.code}`,
      null,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    if (err) {
      ShowNotify('danger', err.msg);
    }
    console.log(response);
  };

  const print = {
    skeleton: <SkeletonCardData />,
    componentprint: (
      <>
        <div className="flex flex-col justify-center  items-center">
          <CardData data={data} />
          <div className="flex justify-center gap-4 mt-6">
            <ActionButton
              label="Actualizar"
              bgColor="bg-green-500"
              hoverColor="hover:bg-green-600"
              handleclick={handleUpdateClick}
            />
            <ActionButton
              label="Activar"
              bgColor="bg-orange-400"
              hoverColor="hover:bg-orange-600"
              handleclick={onActiveClick}
            />
          </div>
        </div>
      </>
    ),
  };

  return (
    <div className="w-full p-2 flex flex-col lg:flex-row gap-8 overflow-auto scrollbar-hide relative">
      <InputSection onSearch={handleSearch} />
      <DataSection data={data} loading={loading} print={print} />
      {isModalOpen && (
        <Modal
          onClose={handleCloseModal}
          componetPrint={
            <FormNazareno defaultValues={data} onSubmit={handleSubmit} />
          }
        />
      )}
    </div>
  );
}

function InputSection({ onSearch }) {
  return (
    <div className="flex flex-col items-center space-y-6 w-full lg:w-1/3 p-6 bg-white rounded-xl shadow-md">
      <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-b from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-300 ring-2 ring-white">
        <FaUser className="text-gray-600 text-4xl lg:text-6xl drop-shadow-md" />
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
    <div className="flex-1 p-4 lg:p-6 bg-white rounded-xl shadow-md">
      {loading && skeleton}
      {!loading && data && componentprint}
      {!loading && !data && skeleton}
    </div>
  );
}
