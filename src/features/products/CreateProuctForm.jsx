import { useState } from "react";
import { formatCurrency, handleProudctInputs } from "../../utils/helper";
import { usePostProduct } from "./usePostProduct";
import { SpinnerSmall } from "../../ui/Spinner";
import { showErrorToast } from "../../ui/Toasts";
import { FORM_INPUTS } from "../../utils/Constants";

import styled from "styled-components";
import InputItem from "./InputItem";

const FormBox = styled.form`
  padding: 20px;
  border-radius: 10px;
  background-color: #f9fafb;
  border: 1px solid rgba(153, 153, 153, 0.529);
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  width: 100%;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverPrimary};
  }
`;
function CreateProductForm({ categories }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("mens's clothing");
  const [url, setUrl] = useState("");
  const states = {
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
  };

  const { mutateAsync, isError, isPending } = usePostProduct();

  async function handleSubmit(e) {
    e.preventDefault();
    const product = {
      title,
      price,
      description,
      category,
      url,
      id: Math.random() * 10000,
    };

    if (!handleProudctInputs(product)) {
      return;
    }
    await mutateAsync(product);
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice(0);
    setUrl("");
  }

  return (
    <FormBox onSubmit={handleSubmit}>
      {FORM_INPUTS.map((item) => (
        <InputItem
          key={item.name}
          label={item.label}
          name={item.name}
          type={item.type}
          placeholder={item.placeHolder}
          states={states}
          categories={categories}
        />
      ))}
      <Button>{isPending ? <SpinnerSmall /> : "Create Product"}</Button>
    </FormBox>
  );
}

export default CreateProductForm;
