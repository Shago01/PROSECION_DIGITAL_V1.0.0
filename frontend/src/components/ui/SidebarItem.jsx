import { Link } from 'react-router-dom';

function SidebarItem({ to, text, style, icon: Icon }) {
  return (
    <Link to={to} className={style}>
      {Icon && <Icon size={20} />}
      <span>{text}</span>
    </Link>
  );
}

export default SidebarItem;
