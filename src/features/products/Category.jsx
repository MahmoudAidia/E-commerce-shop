import styled from "styled-components";

const CatgeoryBox = styled.span`
  font-size: 14px;
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  background-color: #f3f3f5;
  border-radius: 10px;
  font-weight: 500;
  z-index: 20;
  text-transform: uppercase;
`;

function Category({ text }) {
  return <CatgeoryBox>{text}</CatgeoryBox>;
}

export default Category;
