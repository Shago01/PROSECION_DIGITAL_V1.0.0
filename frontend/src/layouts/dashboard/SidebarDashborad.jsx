import { FiHome, FiLayers, FiSettings, FiLogOut } from 'react-icons/fi';
import SidebarItem from '../../components/ui/SidebarItem';
import { SidebarDropdown } from '../../components/ui/SidebarDropdown';

const styles = {
  based:
    'flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gradient-to-r',
  primary: ' from-blue-500 to-blue-700 hover:text-white transition-all',
  danger: ' from-red-500 to-red-700 hover:text-white transition-all mt-6',
};
const items = [
  {
    icon: FiHome,
    style: styles.based + styles.primary,
    text: 'Inicio',
    children: [],
  },
  {
    icon: FiLayers,
    style: styles.based + styles.primary,
    text: 'Categorías',
    children: [
      {
        icon: FiLayers,
        style: styles.based + styles.primary,
        text: 'Categorías',
      },
      {
        icon: FiLayers,
        style: styles.based + styles.primary,
        text: 'Categorías',
      },
      {
        icon: FiLayers,
        style: styles.based + styles.primary,
        text: 'Categorías',
      },
    ],
  },
  {
    icon: FiSettings,
    style: styles.based + styles.primary,
    text: 'Configuración',
    children: [],
  },
  {
    icon: FiLogOut,
    style: styles.based + styles.danger,
    text: 'Cerrar sesión',
    children: [],
  },
];

export function SidebarDashboard() {
  return (
    <aside className="w-64 bg-white shadow-lg p-5 ">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">Menú</h2>
      <nav>
        <ul className="space-y-4">
          {items.map((item, i) => {
            if (item.children.length === 0) {
              return (
                <li key={i}>
                  <SidebarItem {...item} />
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <SidebarDropdown {...item} />
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </aside>
  );
}

export default SidebarDashboard;
