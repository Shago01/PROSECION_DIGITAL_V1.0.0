import { useState } from 'react';
import Input from '../../../components/ui/input';
import useFetch from '../../../hooks/http/useFetch';
import { API_URL } from '../../../config/configenv';

export default function AdminNazareno() {
  const [endpoint, setEndpoint] = useState(null);
  const { data, loading } = useFetch(endpoint);

  const handlerBuscar = cedula => {
    console.log(cedula);
    console.log(endpoint);
    setEndpoint(`/api/nazareno/by-doc/${cedula}`);
  };

  console.log(data);
  console.log(loading);

  return (
    <>
      <div className="bg-white w-full flex justify-center ml-4 mr-4 shadow-lg rounded-lg">
        <Input
          label={'Ingrece el número de cedula del nazareno'}
          labelbtn={'Buscar'}
          onBuscar={handlerBuscar}
        />
      </div>
    </>
  );
}
