import { Link } from 'react-router-dom';

function SidebarItem({ to, text, style, icon: Icon, handleClick }) {
  console.log(handleClick);

  return (
    <Link to={to} className={style} onClick={handleClick}>
      {Icon && <Icon size={20} />}
      <span>{text}</span>
    </Link>
  );
}

export default SidebarItem;
