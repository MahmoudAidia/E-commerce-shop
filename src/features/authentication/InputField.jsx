import styled from "styled-components";

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

function InputField({ item, user, handleChange }) {
  function onChange(e) {
    handleChange((prev) => {
      if (item.name === "username")
        return { ...prev, username: e.target.value };
      else if (item.name === "email") return { ...prev, email: e.target.value };
      else if (item.name === "password")
        return { ...prev, password: e.target.value };
      else if (item.name === "confirmPassword")
        return { ...prev, confirmPassword: e.target.value };
    });
  }
  return (
    <Item>
      <Label htmlFor={item.name}>{item.label}</Label>
      <Input
        placeholder={item.placeHolder}
        type={item.type}
        name={item.name}
        id={item.name}
        value={user[item.name]}
        onChange={onChange}
      />
    </Item>
  );
}

export default InputField;
