import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/apiUser";
import { showErrorToast, showSuccessToast } from "../../ui/Toasts";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      showSuccessToast("Logged in successfully.");
    },
    onError: () => {
      showErrorToast("Couldn't log in.");
    },
  });
};
