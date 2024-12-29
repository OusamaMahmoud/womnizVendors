import React from "react";
import { BsDot } from "react-icons/bs";

const StatusBadge = ({ status }: { status: string }) => {
  return (
    <div>
      <span
        className={`flex items-center  justify-center text-[16px] font-bold badge p-[13px] capitalize ${
          status === "live"
            ? "bg-[#ECFDF3] text-[#037847]"
            : status === "rejected"
            ? "bg-[#E2000029] text-[#E20000]"
            : status === "draft"
            ? "bg-[#EDEDED] text-[#636366]"
            : status === "deactivated"
            ? "bg-[#FDEDEF] text-[#E20000]"
            : status === "out of stock"
            ? "bg-[#EDEDED] text-[#474242]"
            : ""
        }`}
      >
        <BsDot
          className={`text-4xl -mx-2 ${
            status === "live"
              ? "text-[#14BA6D]"
              : status === "rejected"
              ? "text-[#E2000099]"
              : status === "draft"
              ? "text-[#7E7E7E]"
              : status === "out of stock"
              ? "text-[#474242]"
              : ""
          }`}
        />{" "}
        {status}
      </span>
    </div>
  );
};

export default StatusBadge;
