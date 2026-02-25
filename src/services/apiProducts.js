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
    console.error("Data didn'wt get fetched");
    throw new Error("Data didn't get fetched");
  }
}

export async function postProduct(product) {
  try {
    const { data } = await axios.post(`${BASE_URL}/products`, product);
    return data;
  } catch (err) {
    showErrorToast("Didn't send product to server");
    console.error("Didn't send product to server");
    throw new Error("Didn't send product to server");
  }
}
