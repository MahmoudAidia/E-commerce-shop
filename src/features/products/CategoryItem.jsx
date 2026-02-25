import styled from "styled-components";
const Select = styled.select`
  width: 100%;
  font-size: 16px;
  text-transform: capitalize;
  padding: 10px 5px;
  outline: none;
  border: 1px solid #99999973 !important;
  border-radius: 10px;
`;
const Option = styled.option`
  padding: 10px 20px;
  text-transform: capitalize;
`;

function CategoryItem({ categories, value, name, onChange }) {
  return (
    <Select
      id={name}
      name="select"
      value={value}
      onChange={(e) => onChange(e.target.value.toLowerCase())}
    >
      {categories?.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.text}
        </Option>
      ))}
    </Select>
  );
}

export default CategoryItem;
