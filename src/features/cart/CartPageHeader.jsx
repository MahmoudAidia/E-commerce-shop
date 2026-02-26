import styled from "styled-components";
import BackToProducts from "../../ui/BackToProducts";
import { useCart } from "../../context/CartContext";

const CartHeader = styled.div`
  margin: ${(props) => props.theme.margin};
  > h2 {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${(props) => props.theme.marginSmall};
  }
`;
function CartPageHeader() {
  const { totalItems } = useCart();
  return (
    <CartHeader>
      <BackToProducts />
      <h2>Shopping Cart ({totalItems} items)</h2>
    </CartHeader>
  );
}

export default CartPageHeader;
