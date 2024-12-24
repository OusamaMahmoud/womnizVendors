import { useState } from "react";

const ProfileNavbar = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="flex gap-4 items-start shadow-md p-4 rounded-lg">
      <div className="mask mask-squircle h-14 w-14 rounded-full">
        <img
          src={"https://img.daisyui.com/images/profile/demo/2@94.webp"}
          alt="icon"
        />
      </div>
      <section className="flex flex-col gap-[1px]">
        <h1 className="text-xl font-poppins capitalize">Osama</h1>
        <p className="opacity-35 text-lg capitalize">Vendor</p>
        <p className="opacity-35 text-sm capitalize ">Saudi Ariabia</p>
      </section>
      <select
        className={`ml-10 select select-bordered ${
          active ? "bg-[#32936F29] text-[#519C66]" : "bg-red-500 text-black"
        } `}
      >
        <option value={"active"}>Active</option>
        <option value={"inactive"}>In-Active</option>
      </select>
    </div>
  );
};

export default ProfileNavbar;
