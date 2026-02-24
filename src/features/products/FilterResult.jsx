import styled from "styled-components";

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #888;
  margin: ${(props) => props.theme.margin};
  margin-bottom: 15px;
  text-align: center;
`;

function FilterResult({ paginationLength, productsLength }) {
  return (
    <P>
      Showing {paginationLength} of {productsLength} products
    </P>
  );
}

export default FilterResult;
