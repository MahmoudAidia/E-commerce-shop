import { showErrorToast } from "../ui/Toasts";

export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value,
  );

export const getCategories = (products) => {
  const categories = {};
  for (let i = 0; i < products?.length; i++) {
    const item = products[i];
    if (!(item?.category in categories)) {
      categories[item?.category] = i;
    }
  }

  const result = [{ id: Math.random(), text: "all", value: "all" }];
  for (const key in categories) {
    result?.push({ id: categories[key], text: key, value: `${key}` });
  }

  return result;
};

export const sortProducts = (products, sort) => {
  if (sort === "all") return products;
  if (sort === "asc") products.sort((a, b) => a.price - b.price);
  if (sort === "dsc") products.sort((a, b) => b.price - a.price);
  return products;
};

export const filterProducts = (products, filter) => {
  if (filter !== "all") {
    products = products.filter(
      (item) => item.category.toLowerCase() === filter.toLowerCase(),
    );
  }

  return products;
};

export const handleProudctInputs = ({
  title,
  description,
  url,
  price,
  category,
}) => {
  if (!title && !description && !url && !price && !category) {
    showErrorToast("Please fill form fileds");
    return false;
  }
  if (!title) {
    showErrorToast("Please enter title");
    return false;
  }

  if (!description) {
    showErrorToast("Please enter description");
    return false;
  }

  if (!price) {
    showErrorToast("Please enter price");
    return false;
  }

  if (!category) {
    showErrorToast("Please enter category");
    return false;
  }
  if (!url) {
    showErrorToast("Please enter image URL");
    return false;
  }
  return true;
};

export function handleSignupInput({
  username,
  email,
  password,
  confirmPassword,
}) {
  if (!username && !email && !password && !confirmPassword) {
    showErrorToast("Please fill form fileds");
    return false;
  }
  if (!username) {
    showErrorToast("Please enter username");
    return false;
  }

  if (!email) {
    showErrorToast("Please enter email");
    return false;
  }

  if (!password) {
    showErrorToast("Please enter password");
    return false;
  }

  if (!confirmPassword) {
    showErrorToast("Please enter password again");
    return false;
  }
  return true;
}
export function handleLoginInputs({ username, password }) {
  if (!username && !password) {
    showErrorToast("Please fill form fileds");
    return false;
  }

  if (!username) {
    showErrorToast("Please enter username");
    return false;
  }

  if (!password) {
    showErrorToast("Please enter password");
    return false;
  }

  return true;
}
