import { Outlet } from 'react-router-dom';
import SidebarDashboard from './SidebarDashborad';
import { HeaderDashborad } from './headerDashborad';
import FooterDashborad from './FooterDashboard';

function DashboardLayout() {
  return (
    <>
      <HeaderDashborad />
      <div className="flex flex-row h-full rounded-lg overflow-hidden m-1">
        <SidebarDashboard />
        <Outlet />
      </div>
      <FooterDashborad />
    </>
  );
}

export default DashboardLayout;
