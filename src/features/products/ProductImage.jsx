import styled from "styled-components";

const ProductImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all 0.4s;
  border-bottom: none;
`;

function ProductImage({ image }) {
  return <ProductImg $img={image} />;
}

export default ProductImage;
