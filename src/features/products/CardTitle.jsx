import styled from "styled-components";

const ProductName = styled.h2`
  font-size: 22px;
  font-weight: 600;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
function CardTitle({ text }) {
  return <ProductName>{text}</ProductName>;
}

export default CardTitle;
