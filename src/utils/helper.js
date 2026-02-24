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
