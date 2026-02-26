import styled from "styled-components";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 20px;
  width: 100%;
`;

function CartList({ cart }) {
  return (
    <List>
      {cart.map((item) => (
        <CartItem item={item} />
      ))}
    </List>
  );
}

export default CartList;
