import { showErrorToast } from "../ui/Toasts";
import { useProducts } from "../features/products/useProducts";
import { filterProducts, getCategories, sortProducts } from "../utils/helper";
import { useState } from "react";
import { Spinner } from "../ui/Spinner";

import FilterResult from "../features/products/FilterResult";
import Manipulation from "../features/products/Manipulation";
import ProductsHeader from "../features/products/ProductsHeader";
import ProductsList from "../features/products/ProductsList";

function Products() {
  const { products, isError, isLoading } = useProducts();
  const [displayedProducts, setDisplayedProducts] = useState({
    start: 0,
    end: 10,
    sort: "all",
    filter: "all",
  });

  if (isLoading) return <Spinner />;
  if (isError) {
    showErrorToast("Something went wrong.");
    return;
  }

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
