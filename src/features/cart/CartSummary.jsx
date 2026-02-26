import styled from "styled-components";
import { useCart } from "../../context/CartContext";
import { formatCurrency } from "../../utils/helper";
import Clear from "./Clear";

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #99999980;
  background-color: #fff;
  border-radius: 10px;
  width: 250px;
  height: 260px;
  padding: 20px;
  margin-top: 20px;
  > h3 {
    margin-bottom: 15px;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    > h5 {
      font-weight: 500;
    }
    > h5,
    span {
      opacity: 0.7;
    }
    > p {
      font-weight: 700;
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (max-width: 820px) {
    width: 100%;
  }
`;
function CartSummary() {
  const { totalPrice, totalItems } = useCart();
  const shipping = totalPrice * 0.1;
  return (
    <Summary>
      <h3>Order Summary</h3>
      <div>
        <h5>Total products</h5>
        <span>{totalItems}</span>
      </div>
      <div>
        <h5>Price</h5>
        <span>{formatCurrency(totalPrice)}</span>
      </div>
      <div>
        <h5>Shipping</h5>
        <span>{formatCurrency(shipping)}</span>
      </div>
      <div>
        <h5>Tax</h5>
        <span>Free</span>
      </div>
      <div>
        <h3>Total</h3>
        <p>{formatCurrency(shipping + totalPrice)}</p>
      </div>
      <Clear />
    </Summary>
  );
}

export default CartSummary;
