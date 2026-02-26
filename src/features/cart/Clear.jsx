import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const ClearBtn = styled.button`
  font-size: 14px;
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #9999993a;
  text-decoration: none;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverPrimary};
  }
`;
function Clear() {
  const { clearCart } = useCart();
  return (
    <ClearBtn onClick={() => clearCart()} $primary={true}>
      Clear Cart
    </ClearBtn>
  );
}
export default Clear;
