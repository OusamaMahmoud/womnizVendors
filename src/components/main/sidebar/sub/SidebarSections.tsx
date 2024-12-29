import { MdDashboard } from "react-icons/md";
import logo from "/assets/sidebar/logo.png";
import { NavLink } from "react-router";
import { ReactNode } from "react";
import { getNavLinkClass } from "../Sidebar";
import SidebarCollapse from "./SidebarCollapse";

const SidebarSections = ({
  sidebarLinks,
}: {
  sidebarLinks: { to: string; label: string; icon: ReactNode }[];
}) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" width={100} height={50} />
      </div>
      <div className="flex flex-col gap-2 mt-6 pl-2 pr-4 mb-8">
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
      <SidebarCollapse
        mainHeading="Products"
        links={[
          { label: "Products", to: "all-products" },
          { label: "Add New Product", to: "add-new-product" },
        ]}
      />
      <SidebarCollapse
        mainHeading="Orders"
        links={[{ label: "Orders", to: "orders" }]}
      />
    </>
  );
};

export default SidebarSections;
