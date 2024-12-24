import React from "react";

const LabelWithValue = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col gap-1 px-2">
      <h1 className="text-lg font-poppins capitalize ">{label}</h1>
      <h1 className="text-lg font-poppins opacity-65 capitalize ">
        {value}
      </h1>
    </div>
  );
};

export default LabelWithValue;
