import styled from "styled-components";

const ProductImg = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${(props) => props.$img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all 0.4s;
  border-bottom: none;
  @media (max-width: 768px) {
    min-width: 300px;
    height: 300px;
  }
`;

function ProductImage({ image }) {
  return <ProductImg $img={image} />;
}

export default ProductImage;
