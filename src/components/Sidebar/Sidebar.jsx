import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
  return (
    <aside className="w-80 text-white p-4 lg:flex flex-col justify-between px-5 hidden">
      <SidebarHeader />
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
