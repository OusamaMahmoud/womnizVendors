import { BiSearch } from "react-icons/bi";
import TextInput from "../../components/common/inputs/TextInput";
import Table, { TableSchema } from "../../components/common/table/Table";
import SalesData from "./sub/SalesData";
import SelectInput from "../../components/common/inputs/SelectInput";
import OrderInfoBox from "../orders/sub/OrderInfoBox";
import StatusBadge from "../../components/common/table/StatusBadge";
const salesData = [
  { id: "1", label: "Total Income", value: "3000" },
  { id: "2", label: "Total Income", value: "5000" },
  { id: "3", label: "Total Income", value: "7000" },
  { id: "4", label: "Total Income", value: "9000" },
  { id: "5", label: "Total Income", value: "67899" },
];
const Products = () => {
  const tableProps: TableSchema = {
    tableHead: ["Name", "Company", "Color", "Action"],
    tableBody: [
      {
        avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        id: "1",
        name: "osama",
        email: "osuana.mah122@gmail.com",
        company: "Company1",
        status: "live",
      },
      {
        avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        id: "2",
        name: "shata",
        email: "mah122@gmail.com",
        company: "Company2",
        status: "draft",
      },
      {
        avatar: "https://img.daisyui.com/images/profile/demo/2@94.webp",
        id: "3",
        name: "saad",
        email: "mah122@os.com",
        company: "Company3",
        status: "deactivated",
      },
    ],
    keys: ["avatar", "name", "email", "company"],
    checkBox: true,
    avatar: true,
    status: true,
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {salesData.map((item) => (
          <SalesData key={item.id} label={item.label} value={item.value} />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        <TextInput icon={<BiSearch />} placeholder="search..." type="text" />
        <SelectInput options={[]} placeholder="Select Brand" />
        <SelectInput options={[]} placeholder="Select Category" />
        <SelectInput options={[]} placeholder="Select Status" />
      </div>
      <div className="mt-8">
        <Table {...tableProps} />
      </div>
    </div>
  );
};

export default Products;
