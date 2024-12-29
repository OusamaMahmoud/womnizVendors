import React from "react";

const OrderInfoBox = ({
  data,
  header,
}: {
  header: string;
  data: { label: string; value: string | React.ReactNode }[];
}) => {
  return (
    <div className="border p-6 shadow-xl rounded-xl min-w-[450px] max-w-[600px]">
      <h1 className="text-2xl font-bold mb-4">{header}</h1>
      {data.map((item) => (
        <div
          className="flex justify-between items-center mb-4"
          key={item.label}
        >
          <h1 className="font-poppins text-lg mb-2">{item.label}</h1>
          <p className="text-sm font-bold text-[#0000005a]">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderInfoBox;
