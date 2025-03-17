import { FaUserCircle } from 'react-icons/fa';

export function HeaderDashborad() {
  return (
    <header className="bg-[#3F84C5] m-1 rounded-lg text-white p-4 flex justify-between items-center border-b border-gray-300">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <FaUserCircle className="text-3xl text-white cursor-pointer" />
    </header>
  );
}
