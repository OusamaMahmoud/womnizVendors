import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside className="mt-2 h-full w-full  rounded-e-2xl shadow-2xl">
      {/* Logo Section */}
      <div className="flex justify-center items-center py-5">
        <img
          src="/public/assets/sidebar/logo.png"
          alt="logo"
          width={80}
          height={42}
        />
      </div>

      {/* Navigation Links */}
      <div className="mt-6 px-2">
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            `flex items-center gap-2 text-sm w-full pl-4 font-inter py-1 rounded-s-xl text-left ${
              isActive ? "bg-[#577656] text-white" : "text-black"
            }`
          }
        >
          <img src="assets/sidebar/profile.png" alt="profile" /> Dashboard
        </NavLink>
      </div>
      <NavLink
        to={"/profiles"}
        className={({ isActive }) =>
          `flex items-center gap-2 text-sm w-full pl-4 font-inter py-1 rounded-s-xl text-left ${
            isActive ? "bg-[#577656] text-white" : "text-black"
          }`
        }
      >
        <img src="assets/sidebar/profile.png" alt="profile" /> My Profile
      </NavLink>
    </aside>
  );
};

export default Sidebar;
