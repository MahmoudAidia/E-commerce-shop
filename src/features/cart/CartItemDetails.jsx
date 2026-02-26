import { formatCurrency } from "../../utils/helper";
import Quantity from "../products/Quantity";
import styled from "styled-components";

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.$img});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 230px;
  height: 230px;
  border-radius: 10px;
`;
const DetailsText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > h3 {
    max-width: 80%;
    margin-bottom: 10px;
  }
  > span {
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  > p {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
  }
  @media (max-width: 600px) {
    h3 {
      max-width: 100%;
    }
  }
`;
function CartItemDetails({ item }) {
  return (
    <Details>
      <Image $img={item.image} />
      <DetailsText>
        <h3>{item.title}</h3>
        <span>{item.category}</span>
        <p>{formatCurrency(item.price)}</p>
        <Quantity item={item} counter={item.quantity} cart={true} />
      </DetailsText>
    </Details>
  );
}

export default CartItemDetails;
