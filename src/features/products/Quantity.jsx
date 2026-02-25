import { useState } from "react";
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
  gap: 10px;
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

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }
`;
function Quantity({ counter, setCounter }) {
  return (
    <Box>
      <h3>Quantity</h3>
      <Counter>
        <Button
          onClick={() => setCounter((prev) => (prev > 0 ? (prev -= 1) : 0))}
        >
          -
        </Button>
        <p>{counter}</p>
        <Button onClick={() => setCounter((prev) => (prev += 1))}>+</Button>
      </Counter>
    </Box>
  );
}

export default Quantity;
