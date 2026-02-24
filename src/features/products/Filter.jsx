import Select from "./Select";

function Filter({ value, categories, setDisplayedProducts }) {
  return (
    <Select
      setDisplayedProducts={setDisplayedProducts}
      name={"filter"}
      options={categories}
      value={value}
    />
  );
}

export default Filter;
