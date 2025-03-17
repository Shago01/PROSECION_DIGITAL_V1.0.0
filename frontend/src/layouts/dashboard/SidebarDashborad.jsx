import { FaTable, FaUser } from 'react-icons/fa';
import { FiHome, FiLogOut, FiSettings } from 'react-icons/fi';
import { IoMdPersonAdd } from 'react-icons/io';
import { SidebarDropdown } from '../../components/ui/SidebarDropdown';
import SidebarItem from '../../components/ui/SidebarItem';
import useAuth from '../../hooks/auth/useAuth';

const styles = {
  base: 'flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gradient-to-r transition-all',
  primary: 'from-blue-500 to-blue-700 hover:text-white',
  danger: 'from-red-500 to-red-700 hover:text-white mt-6',
};

export function SidebarDashboard() {
  const { logoutUser } = useAuth();

  const menuItems = [
    {
      icon: FiHome,
      text: 'Inicio',
      style: `${styles.base} ${styles.primary}`,
      to: '/dashboard/home',
    },
    {
      icon: FaUser,
      text: 'Usuarios',
      style: `${styles.base} ${styles.primary}`,
      children: [
        {
          icon: FaTable,
          text: 'Tabla',
          to: '/dashboard/user/tabla',
          style: `${styles.base} ${styles.primary}`,
        },
        {
          icon: IoMdPersonAdd,
          text: 'Registrar',
          to: '/dashboard/user/register',
          style: `${styles.base} ${styles.primary}`,
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
          to: '/dashboard/user/tabla',
          style: `${styles.base} ${styles.primary}`,
        },
        {
          icon: IoMdPersonAdd,
          text: 'Registrar',
          to: '/dashboard/user/register',
          style: `${styles.base} ${styles.primary}`,
        },
      ],
    },
    {
      icon: FiLogOut,
      text: 'Cerrar sesión',
      style: `${styles.base} ${styles.danger}`,
      handleClick: logoutUser,
    },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg p-5">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Menú</h2>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, i) =>
            item.children ? (
              <li key={i}>
                <SidebarDropdown {...item} />
              </li>
            ) : (
              <li key={i}>
                <SidebarItem {...item} />
              </li>
            ),
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default SidebarDashboard;
