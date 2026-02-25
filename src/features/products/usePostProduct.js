import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postProduct } from "../../services/apiProducts";
import { showSuccessToast } from "../../ui/Toasts";

export const usePostProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      showSuccessToast("The product was created successfully.");
    },
  });
};
