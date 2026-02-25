import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../services/apiUser";
import { showErrorToast, showSuccessToast } from "../../ui/Toasts";

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      showSuccessToast("Account created.");
    },
    onError: () => {
      showErrorToast("Couldn't create user");
    },
  });
};
