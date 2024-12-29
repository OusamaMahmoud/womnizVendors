import React from "react";

const SalesData = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex max-w-xs flex-col justify-center items-center border p-6 shadow-xl rounded-xl ">
      <h1 className="font-poppins text-xl mb-2">{label}</h1>
      <p className="text-lg font-bold">{value}</p>
    </div>
  );
};

export default SalesData;
