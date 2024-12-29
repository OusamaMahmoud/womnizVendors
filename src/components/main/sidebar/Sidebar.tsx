import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { NavLink } from "react-router";
import { useStateStore } from "../../../store/useStateStore";
import { MdDashboard } from "react-icons/md";
import logo from "/assets/sidebar/logo.png";
import SidebarSections from "./sub/SidebarSections";

const sidebarLinks = [
  {
    to: "/dashboard",
    label: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    to: "/profiles",
    label: "My Profile",
    icon: <MdDashboard />,
  },
];

export const getNavLinkClass = (isActive: boolean) =>
  `flex items-center gap-2 text-sm w-full pl-4 font-poppins py-2 rounded-s-xl text-left border ${
    isActive ? "bg-[#577656] text-white" : "text-black"
  }`;
const Sidebar = () => {
  const { isOpen, toggleSidebar } = useStateStore();

  return (
    <aside
      className={`mt-2 mr-4 h-full rounded-e-2xl shadow-xl transition-all duration-300 ${
        isOpen ? "w-[240px]" : "w-12"
      }`}
    >
      <div className="flex justify-end items-center py-2 px-3 cursor-pointer">
        {isOpen ? (
          <GoSidebarExpand className="text-xl" onClick={toggleSidebar} />
        ) : (
          <GoSidebarCollapse className="text-xl" onClick={toggleSidebar} />
        )}
      </div>
      {isOpen && <SidebarSections sidebarLinks={sidebarLinks} />}
    </aside>
  );
};

export default Sidebar;
