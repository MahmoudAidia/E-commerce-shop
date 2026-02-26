import axios from "axios";
import { BASE_URL } from "../utils/Constants";

export async function createUser({ username, email, password }) {
  try {
    const { data } = await axios.post(`${BASE_URL}/users`, {
      username,
      email,
      password,
    });
    return data;
  } catch (error) {
    const message = error.response?.data?.message || "Failed to create user";
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

// createUser({
//   username: "Mahmoud",
//   email: "mahmoud@example.com",
//   password: "123456",
// })
//   .then((data) => {
//     console.log("User created:", data);
//   })
//   .catch((error) => {
//     console.error("Signup error:", error.message);
//   });

const data = await createUser({
  username: "Ahvvvabeabermoud",
  email: "test@gmail.com",
  password: "124varba586",
});

console.log(data);
