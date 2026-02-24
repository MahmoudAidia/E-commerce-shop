import styled from "styled-components";
import Card from "./Card";

const List = styled.ul`
  list-style: none;
  /* display: grid;
  grid-template-columns: repeat(auto, 1fr); */
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 20px;
  margin: ${(props) => props.theme.margin};

  @media (max-width: 768px) {
    margin: ${(props) => props.theme.marginSmall};
  }
`;

function ProductsList({ products }) {
  return (
    <List>
      {products?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </List>
  );
}

export default ProductsList;
