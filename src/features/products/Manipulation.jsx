import styled from "styled-components";
import Filter from "./Filter";
import Sort from "./Sort";
import Pagination from "./Pagination";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: ${(props) => props.theme.margin};
  margin-bottom: 15px;

  @media (max-width: 768px) {
    text-align: center;
    margin: ${(props) => props.theme.marginSmall};
    margin-bottom: 15px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

function Manipulation({
  categories,
  productsNum,
  sortValue,
  filterValue,
  setDisplayedProducts,
}) {
  return (
    <Div>
      <Filter
        categories={categories}
        setDisplayedProducts={setDisplayedProducts}
        value={filterValue}
      />
      <Pagination
        productsNum={productsNum}
        setDisplayedProducts={setDisplayedProducts}
      />
      <Sort setDisplayedProducts={setDisplayedProducts} value={sortValue} />
    </Div>
  );
}

export default Manipulation;
