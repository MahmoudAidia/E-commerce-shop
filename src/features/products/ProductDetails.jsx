import styled from "styled-components";
import Category from "../../features/products/Category";
import Quantity from "./Quantity";
import { useState } from "react";
import ProductActions from "./ProductActions";

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
`;

function ProductDetails({ product }) {
  const [counter, setCounter] = useState(0);

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
      <Quantity counter={counter} setCounter={setCounter} />
      <ProductActions />
    </ProductDetailsBox>
  );
}

export default ProductDetails;
