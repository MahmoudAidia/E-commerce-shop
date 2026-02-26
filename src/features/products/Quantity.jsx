import { useParams } from "react-router";
import { useCart } from "../../context/CartContext";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  > h3 {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  border: 1px solid #99999961;
  /* &:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  } */
`;

function Quantity({ counter, setCounter, usedFor, item }) {
  const { increaseQty, decreaseQty, addItem, cart } = useCart();
  const quantity =
    cart.find((cartItem) => cartItem.id === Number(item.id))?.quantity || 0;

  function handleIncrease() {
    if (usedFor === "view") {
      setCounter((prev) => (prev += 1));
    } else {
      increaseQty(item.id);
    }
  }
  function handleDecrease() {
    if (usedFor === "view") {
      setCounter((prev) => (prev -= 1));
    } else {
      decreaseQty(item.id);
    }
  }
  return (
    <Box>
      <h3>Quantity</h3>
      <Counter>
        <Button onClick={handleDecrease}>-</Button>
        <p>{usedFor === "view" ? counter : quantity}</p>
        <Button onClick={handleIncrease}>+</Button>
      </Counter>
    </Box>
  );
}

export default Quantity;
