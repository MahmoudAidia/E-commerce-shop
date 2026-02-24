import { formatCurrency } from "../../utils/helper";
import { Link } from "react-router";

import styled from "styled-components";

import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardButtons from "./CardButtons";

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: none;
  padding: 0 10px;
  transition: all 0.3s;
  padding-bottom: 20px;
  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  }
`;

const Price = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 100px;
`;

function ProductText({ item }) {
  return (
    <Div>
      <CardTitle text={item.title} />
      <CardDescription id={item.id} desc={item.description} />
      <Price>{formatCurrency(item.price)}</Price>
      <CardButtons id={item.id} />
    </Div>
  );
}

export default ProductText;
