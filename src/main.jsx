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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
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
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router}>
        <Toaster />
        <App />
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>,
);
