const RoundedThumbnailWithLabel = ({
  icon,
  label,
}: {
  icon: string;
  label?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <div className="mask mask-squircle h-12 w-12 rounded-full">
        <img src={icon} alt="icon" />
      </div>
      <p className="text-xs">{label}</p>
    </div>
  );
};

export default RoundedThumbnailWithLabel;
