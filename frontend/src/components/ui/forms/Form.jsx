import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ onSub, inputs, defaultValues }) {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form
      className="space-y-8 text-sm m-4 text-gray-600 font-normal"
      onSubmit={handleSubmit(async data => {
        if (await onSub(data)) {
          reset();
        }
      })}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {inputs.map((field, index) => (
          <div key={index}>
            <label className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
              {field.icon}
              {field.label}
            </label>
            {field.type === 'select' ? (
              <select
                {...register(field.name, field.validation)}
                className={`border w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  errors[field.name]
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              >
                {field.options.map((option, idx) => (
                  <option key={idx} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                {...register(field.name, field.validation)}
                className={`border w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 ${
                  errors[field.name]
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              />
            )}
            {errors[field.name] && (
              <p className="text-sm mt-2 px-3 py-2 bg-red-100 text-red-700 border border-red-500 rounded-md">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer "
      >
        Enviar
      </button>
    </form>
  );
}
