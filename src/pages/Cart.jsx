import { useCart } from "../context/CartContext";
import CartBody from "../features/cart/CartBody";
import CartPageHeader from "../features/cart/CartPageHeader";
import Empty from "../ui/Empty";
import Layout from "../ui/Layout";

function Cart() {
  const { cart } = useCart();

  return (
    <Layout>
      {cart.length ? (
        <>
          <CartPageHeader />
          <CartBody cart={cart} />
        </>
      ) : (
        <Empty>Your cart is empty.</Empty>
      )}
    </Layout>
  );
}

export default Cart;
