import { useCart } from "../../context/CartContext";
import styled from "styled-components";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import Empty from "../../ui/Empty";

const CartWrapper = styled.div`
  margin: ${(props) => props.theme.marginSmall};
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 40px;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;
function CartBody({ cart }) {
  return (
    <CartWrapper>
      <CartList cart={cart} />
      <CartSummary />
    </CartWrapper>
  );
}

export default CartBody;
