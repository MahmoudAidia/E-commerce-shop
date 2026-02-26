import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const Span = styled.span`
  width: 30px;
  height: 30px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -13px;
  right: -15px;
`;
function Notification() {
  const { totalItems } = useCart();
  return <Span className="notification">{totalItems}</Span>;
}

export default Notification;
