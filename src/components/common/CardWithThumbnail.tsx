import React from "react";

const CardWithThumbnail = ({
  thumbnail,
  label,
  sub1,
  sub2,
}: {
  thumbnail: string;
  label: string;
  sub1: string;
  sub2: string;
}) => {
  return (
    <div>
      <div className="flex items-center gap-x-4  p-4 w-full border rounded-lg">
        <div className="mask mask-squircle h-12 w-12">
          <img src={thumbnail} alt="icon" />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-sm font-poppins">{label}</p>
          <div className="flex justify-between items-center">
            <span className="opacity-35 capitalize">{sub1}</span>
            <span className="text-lg text-[#577656]">{sub2}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithThumbnail;
