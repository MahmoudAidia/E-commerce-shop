import styled from "styled-components";
import Category from "./Category";

const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${(props) => props.$img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: all 0.4s;
  border-bottom: none;

  &:hover {
    transform: scale(105%);
  }
`;

function ProductImg({ img }) {
  return <ImgBox $img={img}></ImgBox>;
}

export default ProductImg;
