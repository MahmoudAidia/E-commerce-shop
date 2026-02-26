import styled from "styled-components";
import ProductImg from "./ProductImg";
import ProductText from "./ProductText";
import Category from "./Category";

const Div = styled.div`
  padding-top: 20px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  transition: all 0.4s;
  margin-bottom: 20px;
  border: 0.5px solid #ccc;
  @media (max-width: 695px) {
    width: 80%;
  }
`;

function Card({ item }) {
  return (
    <Div>
      <Category
        text={item?.category}
        position={{ top: "10px", right: "10px" }}
      />
      <ProductImg img={item?.image} />
      <ProductText item={item} />
    </Div>
  );
}

export default Card;
