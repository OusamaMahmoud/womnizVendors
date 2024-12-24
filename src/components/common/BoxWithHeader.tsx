import { ReactNode } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";

const BoxWithHeader = ({
  children,
  header,
  childrenClass,
  link,
  linkLabel,
}: {
  children: ReactNode;
  header: string;
  childrenClass: string;
  link?: string;
  linkLabel?: string;
}) => {
  return (
    <div className="flex flex-col gap-4 px-5 py-6 bg-white rounded-lg shadow-md">
      {!link ? (
        <h1 className="text-xl font-poppins mb-2 ">{header}</h1>
      ) : (
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-poppins mb-2 ">{header}</h1>
          <Link
            to={link}
            className="flex gap-2 items-center text-lg capitalize  mb-2 text-[#577656]"
          >
            {linkLabel} <FaExternalLinkAlt />
          </Link>
        </div>
      )}
      <div className={childrenClass}>{children}</div>
    </div>
  );
};

export default BoxWithHeader;
