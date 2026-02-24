import styled from "styled-components";

const SelectWrapper = styled.select`
  /* width: 150px; */
  width: fit-content;
  background: #f3f3f5;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  text-transform: capitalize;
`;
const Option = styled.option`
  font-size: 16px;
  padding: 5px;
  background: #f3f3f5;
  padding: 10px 15px;
  text-transform: capitalize;
`;

function Select({ value, options, name, setDisplayedProducts }) {
  return (
    <SelectWrapper
      name={name}
      value={value}
      onChange={(e) =>
        setDisplayedProducts((prev) => {
          if (
            e.target.value === "asc" ||
            e.target.value === "dsc" ||
            e.target.value === "all"
          ) {
            return { ...prev, sort: e.target.value };
          } else {
            return { ...prev, filter: e.target.value };
          }
        })
      }
    >
      {options?.map((item) => (
        <Option key={item.id} value={item.value}>
          {item.text}
        </Option>
      ))}
    </SelectWrapper>
  );
}

export default Select;
