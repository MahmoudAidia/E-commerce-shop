import { BASE_URL } from "../utils/Constants";
import axios from "axios";

export async function fetchAllProducts() {
  try {
    const { data } = await axios.get(`${BASE_URL}/products`);
    return data;
  } catch (err) {
    console.error("Data didn't get fetched");
    throw new Error("Data didn't get fetched");
  }
}
