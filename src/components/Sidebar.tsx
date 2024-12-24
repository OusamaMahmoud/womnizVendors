import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { NavLink } from "react-router";
import { useStateStore } from "../store/useStateStore";
import { MdDashboard } from "react-icons/md";
import logo from "/assets/sidebar/logo.png";

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

const getNavLinkClass = (isActive: boolean) =>
  `flex items-center gap-2 text-sm w-full pl-4 font-inter py-1 rounded-s-xl text-left ${
    isActive ? "bg-[#577656] text-white" : "text-black"
  }`;

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useStateStore();

  return (
    <aside
      className={`mt-2 h-full rounded-e-2xl shadow-2xl transition-all duration-300 ${
        isOpen ? "w-[214px]" : "w-12"
      }`}
    >
      <div className="flex justify-end items-center py-2 px-3 cursor-pointer">
        {isOpen ? (
          <GoSidebarCollapse className="text-xl" onClick={toggleSidebar} />
        ) : (
          <GoSidebarExpand className="text-xl" onClick={toggleSidebar} />
        )}
      </div>
      {isOpen && (
        <>
          <div className="flex justify-center items-center">
            <img src={logo} alt="logo" width={100} height={50} />
          </div>
          <div className="flex flex-col gap-2 mt-6 px-2">
            {sidebarLinks.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {icon}
                {label}
              </NavLink>
            ))}
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
