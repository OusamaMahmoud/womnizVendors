import SelectInput from "../../components/common/inputs/SelectInput";
import StatusBadge from "../../components/common/table/StatusBadge";
import OrderInfoBox from "./sub/OrderInfoBox";

const OrdersDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <OrderInfoBox
          header="Total Orders"
          data={[
            { label: "Total Orders", value: "3000" },
            { label: "Total Orders", value: "5000" },
            {
              label: "Total Orders",
              value: <SelectInput options={[]} placeholder="Select Status" />,
            },
            { label: "Total Orders", value: <StatusBadge status="live" /> },
          ]}
        />
        <OrderInfoBox
          header="Total Orders"
          data={[
            { label: "Total Orders", value: "3000" },
            { label: "Total Orders", value: "5000" },
            {
              label: "Total Orders",
              value: <SelectInput options={[]} placeholder="Select Status" />,
            },
            { label: "Total Orders", value: <StatusBadge status="live" /> },
          ]}
        />
      </div>
    </div>
  );
};

export default OrdersDetails;
