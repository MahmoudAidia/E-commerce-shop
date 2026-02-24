import Select from "./Select";
const data = [
  { id: 5, text: "Default", value: "all" },
  { id: 6, text: "Price: Low to High", value: "asc" },
  { id: 7, text: "Price: Hight to Low", value: "dsc" },
];

function Sort({ setDisplayedProducts, value }) {
  return (
    <Select
      name={"sort"}
      value={value}
      setDisplayedProducts={setDisplayedProducts}
      options={data}
    />
  );
}

export default Sort;
