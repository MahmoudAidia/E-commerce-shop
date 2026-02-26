import styled from "styled-components";
import Category from "../../features/products/Category";
import Quantity from "./Quantity";
import { useState } from "react";
import ProductActions from "./ProductActions";
import { useCart } from "../../context/CartContext";
import { showSuccessToast } from "../../ui/Toasts";

const ProductDetailsBox = styled.div`
  width: 100%;
  position: relative;
  align-self: center;
`;
const ProductTitle = styled.h2`
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 60px;
  margin-bottom: 30px;
`;
const ProductDescription = styled.div`
  font-weight: 400;
  opacity: 0.8;
  > h3 {
    margin-bottom: 5px;
  }
  > p {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;

function ProductDetails({ product }) {
  const [counter, setCounter] = useState(1);
  const { addItem } = useCart();

  function handleAddToCart() {
    for (let i = 0; i < counter; i++) {
      addItem(product);
    }
    showSuccessToast(
      `${product.title.split(" ").slice(0, 3).join(" ")} was add to the cart.`,
    );
  }
  return (
    <ProductDetailsBox>
      <Category
        text={product.category}
        position={{ top: "10px", left: "10px" }}
      />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>
        <h3>Description:</h3>
        <p>{product.description}</p>
      </ProductDescription>
      <Quantity
        counter={counter}
        setCounter={setCounter}
        usedFor="view"
        item={product}
      />
      <ProductActions product={product} handleAddToCart={handleAddToCart} />
    </ProductDetailsBox>
  );
}

export default ProductDetails;
