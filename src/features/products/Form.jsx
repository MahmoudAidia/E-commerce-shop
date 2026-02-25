import { useState } from "react";
import { formatCurrency } from "../../utils/helper";
import { usePostProduct } from "./usePostProduct";

import styled from "styled-components";
import InputItem from "./InputItem";
import { SpinnerSmall } from "../../ui/Spinner";
import { showErrorToast } from "../../ui/Toasts";
import { FORM_INPUTS } from "../../utils/Constants";

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
function Form({ categories }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    const product = {
      title,
      price,
      description,
      category,
      url,
      id: Math.random() * 10000,
    };
    if (!product.title) {
      showErrorToast("Please enter title");
      return;
    }
    if (!product.price) {
      showErrorToast("Please enter price");
      return;
    }
    if (!product.description) {
      showErrorToast("Please enter description");
      return;
    }
    if (!product.category) {
      showErrorToast("Please enter category");
      return;
    }
    if (!product.url) {
      showErrorToast("Please enter image URL");
      return;
    }
    product.id = Math.random() * 1000;
    mutateAsync(product);
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

export default Form;
