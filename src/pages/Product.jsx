import { useParams } from "react-router";
import { showErrorToast } from "../ui/Toasts";
import { useProduct } from "../features/products/useProducts";

import { Spinner } from "../ui/Spinner";
import styled from "styled-components";
import ProductImage from "../features/products/ProductImage";
import ProductDetails from "../features/products/ProductDetails";

const ProductPage = styled.div`
  height: 90vh;
  margin: ${(props) => props.theme.margin};
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    text-align: center;
    margin: ${(props) => props.theme.marginSmall};
  }
`;

function Product() {
  const { id } = useParams();
  const { product, isLoading, isError } = useProduct(id);

  if (isLoading) return <Spinner />;
  if (isError) {
    showErrorToast("Didn't Fetch product");
    return;
  }
  return (
    <ProductPage>
      <ProductImage image={product.image} />
      <ProductDetails product={product} />
    </ProductPage>
  );
}

export default Product;
