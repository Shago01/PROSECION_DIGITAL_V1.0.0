import { Outlet } from 'react-router-dom';
import FooterDashborad from './FooterDashboard';
import { HeaderDashborad } from './headerDashborad';
import SidebarDashboard from './sidebarDashborad';

function DashboardLayout() {
  return (
    <>
      <HeaderDashborad />
      <div className="flex flex-row h-full rounded-lg overflow-hidden mr-3 m-2 ">
        <SidebarDashboard />
        <Outlet />
      </div>
      <FooterDashborad />
    </>
  );
}

export default DashboardLayout;
