import { getCategories } from "../utils/helper";
import { useProducts } from "../features/products/useProducts";

import styled from "styled-components";
import CreateProductHeader from "../features/products/CreateProductHeader";
import CreateProductForm from "../features/products/CreateProuctForm";

const CreateProductPage = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 0 20px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
function CreateProduct() {
  const { products } = useProducts();
  const categories = getCategories(products);
  return (
    <CreateProductPage>
      <CreateProductHeader />
      <CreateProductForm categories={categories.slice(1)} />
    </CreateProductPage>
  );
}

export default CreateProduct;
