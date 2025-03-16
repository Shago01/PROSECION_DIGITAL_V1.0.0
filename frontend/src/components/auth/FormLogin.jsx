import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { FaLock } from 'react-icons/fa';

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log('Datos enviados:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-sm space-y-5"
    >
      {/* Campo Usuario */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Ingresar usuario
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white">
          <CiUser className="text-gray-500 mr-2 text-lg" />
          <input
            type="text"
            {...register('username', { required: 'El usuario es obligatorio' })}
            placeholder="hernandez1"
            className="w-full outline-none text-lg"
          />
        </div>
        {errors.username && (
          <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
        )}
      </div>

      {/* Campo Contraseña */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Ingresar contraseña
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white relative">
          <FaLock className="text-gray-500 mr-2 text-lg" />
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'La contraseña es obligatoria',
            })}
            placeholder="Contraseña"
            className="w-full outline-none text-lg"
          />
          <button
            type="button"
            className="absolute right-4 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiFillEyeInvisible className="text-lg" />
            ) : (
              <AiFillEye className="text-lg" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Recuperar contraseña */}
      <div className="text-right">
        <a href="#" className="text-[#4095E5] text-sm hover:underline">
          ¿Recuperar contraseña?
        </a>
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className="w-full bg-[#4095E5] text-white py-3 rounded-lg hover:bg-[#357ac8] transition"
      >
        Ingresar
      </button>
    </form>
  );
}
