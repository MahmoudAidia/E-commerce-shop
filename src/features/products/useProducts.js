import { useQuery } from "@tanstack/react-query";
import { fetchAllProducts } from "../../services/apiProducts";

export function useProducts() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchAllProducts(),
  });

  return { products, isLoading, isError };
}

export function useProduct(id) {
  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchAllProducts(id),
  });

  return { product, isLoading, isError };
}
