import axios from "axios";
import { BASE_URL } from "../utils/Constants";
import { showErrorToast } from "../ui/Toasts";

export async function createUser(user) {
  try {
    const { data } = await axios.post(`${BASE_URL}/users`, user);
    if (!data.id) {
      showErrorToast("The data sent back from API is not user");
      return;
    }
    return data;
  } catch (error) {
    const message = error.response?.data?.message || "Error signing up";
    showErrorToast(message);
    throw new Error(message);
  }
}

export async function loginUser(user) {
  try {
    const { data } = await axios.post(
      `https://fakestoreapi.com/auth/login`,
      user,
    );
    return data.token;
  } catch (error) {
    const message = error.response?.data?.message || "Error  ";
    throw new Error(message);
  }
}
