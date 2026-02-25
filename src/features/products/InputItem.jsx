import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const Label = styled.label`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 100%;
  outline: none;
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid;
  font-size: 16px;
  border: 1px solid #99999983;
`;

const Item = styled.div`
  margin-bottom: 20px;
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  outline: none;
`;

function InputItem({ name, label, type, placeholder, categories, states }) {
  const {
    title,
    setTitle,
    price,
    setPrice,
    description,
    setDescription,
    category,
    setCategory,
    url,
    setUrl,
  } = states;

  return (
    <Item>
      <Label htmlFor={name}>{label}</Label>

      {type === "textarea" && (
        <TextArea
          onChange={(e) => setDescription(e.target.value)}
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          value={description}
        />
      )}

      {type !== "textarea" && type !== "select" && (
        <Input
          placeholder={placeholder}
          id={name}
          type={type}
          min={type === "number" ? 0 : ""}
          onChange={(e) => {
            if (name === "title") {
              setTitle(e.target.value);
            } else if (name === "price") {
              setPrice(e.target.value);
            } else if (name === "image") {
              setUrl(e.target.value);
            }
          }}
          value={name === "title" ? title : name === "price" ? price : url}
        />
      )}

      {type === "select" && (
        <CategoryItem
          onChange={setCategory}
          name={name}
          categories={categories}
          value={category}
        />
      )}
    </Item>
  );
}

export default InputItem;
