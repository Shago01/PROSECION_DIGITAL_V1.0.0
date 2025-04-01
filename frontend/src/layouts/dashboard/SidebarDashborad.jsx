import { FaTable, FaUser } from 'react-icons/fa';
import { FaUserGear } from 'react-icons/fa6';
import {
  FiHome,
  FiLogOut,
  FiChevronRight,
  FiChevronLeft,
} from 'react-icons/fi';
import { IoMdPersonAdd } from 'react-icons/io';
import { SidebarDropdown } from '../../components/ui/dropdowns/SidebarDropdown';
import SidebarItem from '../../components/ui/dropdowns/SidebarItem';
import useAuth from '../../hooks/auth/useAuth';
import { useState } from 'react';

const styles = {
  base: 'flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-600 hover:bg-gradient-to-r transition-all',
  primary: 'from-blue-400 to-blue-600 hover:text-white',
  danger: 'from-red-400 to-red-600 hover:text-white mt-2',
};

export function SidebarDashboard() {
  const { logoutUser } = useAuth();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const menuItems = [
    {
      icon: FiHome,
      text: 'Inicio',
      style: `${styles.base} ${styles.primary}`,
      to: '/dashboard/home',
      handleClick: () => toggleSidebar(),
    },
    {
      icon: FaUser,
      text: 'Usuarios',
      style: `${styles.base} ${styles.primary}`,
      children: [
        {
          icon: FaTable,
          text: 'Tabla',
          to: '/dashboard/user/table',
          style: `${styles.base} ${styles.primary}`,
          handleClick: () => toggleSidebar(),
        },
        {
          icon: IoMdPersonAdd,
          text: 'Registrar',
          to: '/dashboard/user/register',
          style: `${styles.base} ${styles.primary}`,
          handleClick: () => toggleSidebar(),
        },
      ],
    },
    {
      icon: FaUser,
      text: 'Nazarenos',
      style: `${styles.base} ${styles.primary}`,
      children: [
        {
          icon: FaTable,
          text: 'Tabla',
          to: '/dashboard/naz/table',
          style: `${styles.base} ${styles.primary}`,
          handleClick: () => toggleSidebar(),
        },
        {
          icon: IoMdPersonAdd,
          text: 'Registrar',
          to: '/dashboard/naz/register',
          style: `${styles.base} ${styles.primary}`,
          handleClick: () => toggleSidebar(),
        },
        {
          icon: FaUserGear,
          text: 'Administrar',
          to: '/dashboard/naz/administracion',
          style: `${styles.base} ${styles.primary}`,
          handleClick: () => toggleSidebar(),
        },
      ],
    },
    {
      icon: FiLogOut,
      text: 'Cerrar sesión',
      style: `${styles.base} ${styles.danger}`,
      handleClick: () => {
        logoutUser();
        toggleSidebar();
      },
    },
  ];

  return (
    <div
      className={`flex sm:relative sm:flex-col gap-5 text-gray-700 justify-between bg-white shadow-lg sm:overflow-auto scrollbar-hide p-2 transition-all duration-300 ${
        isSidebarExpanded
          ? 'fixed z-10 p-4 w-full h-full sm:w-64 sm:flex-shrink-0'
          : 'h-10vh w-full sm:w-16 sm:flex-shrink-0'
      }`}
    >
      <div className="flex w-full ">
        <aside
          className={`transition-all duration-300 ${
            isSidebarExpanded ? 'w-full flex-shrink-0' : 'w-16'
          }`}
        >
          <nav className=" w-full sm:mt-4">
            <ul className="space-y-2 text-sm flex flex-col">
              {isSidebarExpanded ? (
                menuItems.map((item, i) => (
                  <li key={i}>
                    {item.children ? (
                      <SidebarDropdown {...item} />
                    ) : (
                      <SidebarItem {...item} onClick={item.handleClick} />
                    )}
                  </li>
                ))
              ) : (
                <>
                  <li className="p-2 text-center font-bold sm:hidden">Menú</li>
                  {menuItems.map((item, i) => (
                    <li className="w-full  p-3 hidden sm:block" key={i}>
                      {<item.icon size={20} />}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </nav>
        </aside>
      </div>
      <div className="sm:w-full flex justify-end">
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-[40px] h-[40px] p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all duration-300"
        >
          {isSidebarExpanded ? (
            <FiChevronLeft size={20} />
          ) : (
            <FiChevronRight size={20} />
          )}
        </button>
      </div>
    </div>
  );
}

export default SidebarDashboard;
