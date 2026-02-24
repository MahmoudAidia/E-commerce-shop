import styled from "styled-components";
import Wrapper from "../../ui/Wrapper";

const ProductsHeaderWrapper = styled.div`
  color: #222;
  font-weight: 500;
  margin: ${(props) => props.theme.margin};
  margin-bottom: 30px;
  margin-top: 30px;
  @media (max-width: 768px) {
    text-align: center;
    margin: ${(props) => props.theme.marginSmall};
  }
`;

const H1 = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;

function ProductsHeader({ productsNum }) {
  return (
    <ProductsHeaderWrapper>
      <H1>Discover Products</H1>
      <P>Browse our curated collection of {productsNum} amazing products.</P>
    </ProductsHeaderWrapper>
  );
}

export default ProductsHeader;
