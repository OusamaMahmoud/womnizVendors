import React from "react";
import { NavLink } from "react-router";
import { getNavLinkClass } from "../Sidebar";

const SidebarCollapse = ({
  mainHeading,
  links,
}: {
  mainHeading: string;
  links: { to: string; label: string }[];
}) => {
  return (
    <div className="collapse collapse-arrow ">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-xl font-medium  peer-checked:text-[#577656]">
        {mainHeading}
      </div>
      <div className="collapse-content peer-checked:block  hidden">
        {links.map((link) => (
          <div className="mb-2" key={link.to}>
            <NavLink
              to={`/${link.to}`}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {link.label}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarCollapse;
