import BoxWithHeader from "../../../components/common/BoxWithHeader";
import LabelWithValue from "../../../components/common/LabelWithValue";
import RoundedThumbnailWithLabel from "../../../components/common/RoundedThumbnailWithLabel";
import CardWithThumbnail from "../../../components/common/CardWithThumbnail";

const personalInfo = [
  { id: "1", label: "Name", value: "Osama" },
  { id: "2", label: "Email", value: "Osama" },
  { id: "3", label: "Contact Person Name", value: "Osama" },
  { id: "4", label: "Phone Number", value: "Osama" },
  { id: "5", label: "Category", value: "Osama" },
];
const BankDetails = [
  { id: "1", label: "Bank ", value: "Osama" },
  { id: "2", label: "Bank Account Name", value: "Osama" },
  { id: "3", label: "Bank Account Number", value: "Osama" },
  { id: "4", label: "SWIFT Code", value: "Osama" },
  { id: "6", label: "IBAN", value: "Osama" },
  { id: "5", label: "Commission", value: "Osama" },
];
const productsArray = [
  { id: "1", label: "Product 1", value: "Osama" },
  { id: "2", label: "Product 2", value: "Osama" },
  { id: "3", label: "Product 3", value: "Osama" },
  { id: "4", label: "Product 2", value: "Osama" },
  { id: "5", label: "Product 3", value: "Osama" },
  { id: "9", label: "Product 3", value: "Osama" },
  { id: "56", label: "Product 3", value: "Osama" },
];
const vendorAdresses = [
  { id: "1", label: "Address 1", value: "Osama" },
  { id: "2", label: "Address 2", value: "Osama" },
];
const topSelling = [
  {
    id: "1",
    label: "Product 1",
    sub1: "ddd",
    sub2: "sssss",
    thumbnail: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    id: "2",
    label: "Product 2",
    sub1: "ddd",
    sub2: "sssss",
    thumbnail: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    id: "3",
    label: "Product 3",
    sub1: "ddd",
    sub2: "sssss",
    thumbnail: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    id: "4",
    label: "Product 4",
    sub1: "ddd",
    sub2: "sssss",
    thumbnail: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
];
const MainLayout = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 ">
      <div className="flex flex-col gap-4">
        <BoxWithHeader
          header="Personal Information"
          childrenClass="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {personalInfo.map((item) => (
            <LabelWithValue
              key={item.id}
              label={item.label}
              value={item.value}
            />
          ))}
        </BoxWithHeader>
        <BoxWithHeader
          header="Bank Details"
          childrenClass="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {BankDetails.map((item) => (
            <LabelWithValue
              key={item.id}
              label={item.label}
              value={item.value}
            />
          ))}
        </BoxWithHeader>
        <BoxWithHeader
          header="Products"
          childrenClass="flex gap-4 items-center flex-wrap"
          link="https://www.google.com"
          linkLabel="view Details"
        >
          {productsArray.slice(0, 8).map((item) => (
            <RoundedThumbnailWithLabel
              key={item.id}
              label={item.label}
              icon="https://img.daisyui.com/images/profile/demo/2@94.webp"
            />
          ))}
        </BoxWithHeader>
        <BoxWithHeader
          header="Brands"
          childrenClass="flex gap-4 items-center flex-wrap"
          link="https://www.google.com"
          linkLabel="view Details"
        >
          {productsArray.slice(0, 8).map((item) => (
            <RoundedThumbnailWithLabel
              key={item.id}
              icon="https://img.daisyui.com/images/profile/demo/2@94.webp"
            />
          ))}
        </BoxWithHeader>
      </div>
      <div className="flex flex-col gap-4">
        <BoxWithHeader
          header="Addresses"
          childrenClass="grid grid-cols-1 gap-4"
        >
          {vendorAdresses.map((item) => (
            <LabelWithValue key={item.id} label="Name" value="Osama" />
          ))}
        </BoxWithHeader>
        <BoxWithHeader
          header="Top Selling"
          childrenClass="grid grid-cols-1 gap-4"
        >
          {topSelling.map((item) => (
            <CardWithThumbnail
              key={item.id}
              label={item.label}
              sub1={item.sub1}
              sub2={item.sub2}
              thumbnail={item.thumbnail}
            />
          ))}
        </BoxWithHeader>
      </div>
    </div>
  );
};

export default MainLayout;
