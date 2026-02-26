import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };

    case "CLEAR_CART":
      return { ...state, cart: [] };

    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const totalPrice = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);

  function addItem(product) {
    dispatch({ type: "ADD_ITEM", payload: product });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function increaseQty(id) {
    dispatch({ type: "INCREASE_QTY", payload: id });
  }

  function decreaseQty(id) {
    dispatch({ type: "DECREASE_QTY", payload: id });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        totalPrice,
        totalItems,
        addItem,
        removeItem,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export { CartProvider, useCart };
