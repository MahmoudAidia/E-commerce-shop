import { useProducts } from "../features/products/useProducts";
import { filterProducts, getCategories, sortProducts } from "../utils/helper";
import { useState } from "react";

import FilterResult from "../features/products/FilterResult";
import Manipulation from "../features/products/Manipulation";
import ProductsHeader from "../features/products/ProductsHeader";
import ProductsList from "../features/products/ProductsList";
import Spinner from "../ui/Spinner";
import styled from "styled-components";

const ProductsPage = styled.div`
  height: 100vh;
`;
function Products() {
  const { products, isError, isLoading } = useProducts();
  const [displayedProducts, setDisplayedProducts] = useState({
    start: 0,
    end: 10,
    sort: "all",
    filter: "all",
  });

  if (isLoading)
    return (
      <ProductsPage>
        <Spinner />;
      </ProductsPage>
    );
  if (isError) return <p>Couldn't fetch data</p>;

  let result = products?.slice(displayedProducts.start, displayedProducts.end);
  const categories = getCategories(result);

  result = filterProducts(result, displayedProducts.filter);
  let sortedResults = sortProducts([...result], displayedProducts.sort);

  return (
    <div>
      <ProductsHeader productsNum={products?.length} />
      <Manipulation
        categories={categories}
        productsNum={products?.length}
        setDisplayedProducts={setDisplayedProducts}
        sortValue={displayedProducts.sort}
        filterValue={displayedProducts.filter}
      />
      <FilterResult
        paginationLength={result?.length}
        productsLength={products.length}
      />
      <ProductsList products={sortedResults} />
    </div>
  );
}

export default Products;
