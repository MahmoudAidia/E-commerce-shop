import { showErrorToast } from "../ui/Toasts";
import { BASE_URL } from "../utils/Constants";
import axios from "axios";

export async function fetchAllProducts(id = null) {
  try {
    const url = id ? `${BASE_URL}/products/${id}` : `${BASE_URL}/products`;
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    showErrorToast("Something went wrong, Couldn't get products");
    console.error("Data didn't get fetched");
    throw new Error("Data didn't get fetched");
  }
}
