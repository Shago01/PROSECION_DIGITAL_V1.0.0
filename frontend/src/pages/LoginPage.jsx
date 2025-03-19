import { Banner } from '../components/auth/Banner';
import { FormLogin } from '../components/auth/FormLogin';

function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <div className="flex bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full h-[80vh]">
        {/* Sección izquierda con la imagen */}
        <Banner />
        {/* Sección derecha con el formulario */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
          <h2 className="text-2xl font-bold text-[#4095E5] mb-6">
            ¡Bienvenido!
          </h2>
          <FormLogin />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
