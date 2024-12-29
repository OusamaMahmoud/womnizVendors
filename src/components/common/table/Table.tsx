import StatusBadge from "./StatusBadge";

export interface TableSchema {
  tableHead: string[];
  tableBody: any[];
  keys: string[];
  checkBox: boolean;
  avatar: boolean;
  status: boolean;
}



const Table = ({
  tableHead,
  tableBody,
  keys,
  checkBox,
  avatar,
  status,
}: {
  tableHead: string[];
  tableBody: any[];
  keys: string[];
  checkBox: boolean;
  avatar: boolean;
  status: boolean;
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table border rounded-2xl w-full">
        <thead>
          <tr>
            {checkBox && (
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            )}
            {tableHead.map((head, index) => (
              <th
                key={index}
                className="text-left font-poppins font-bold text-[16px]"
              >
                {head}
              </th>
            ))}
            {status && (
              <th className="text-left font-poppins font-bold text-[16px]">
                Status
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {checkBox && (
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
              )}
              {keys.map((key, cellIndex) => (
                <td key={cellIndex}>
                  {cellIndex === 0 && avatar ? ( // Handles the avatar column
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={row[key] || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{row['name'] || "Unknown"}</div>
                      </div>
                    </div>
                  ) : (
                    row[key] || "N/A"
                  )}
                </td>
              ))}
              {status && (
                <td>
                  <StatusBadge status={row.status || "Unknown"} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
