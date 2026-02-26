import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme.js";

import GlobalStyles from "./styles/GlobalStyles.jsx";
import App from "./App.jsx";
import Cart from "./pages/Cart.jsx";
import Products from "./pages/Products.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Product from "./pages/Product.jsx";
import CreateProduct from "./pages/CreateProduct.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/addProduct",
    element: <CreateProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // Data is fresh for 2 minutes
      cacheTime: 1000 * 60 * 10, // Inactive queries are cached for 10 minutes
      refetchOnWindowFocus: true, // automatic refetch on focus
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
          }}
        />
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </CartProvider>
  </StrictMode>,
);
