import { Link } from "react-router";
import styled from "styled-components";

const Description = styled.p`
  opacity: 0.8;
  font-size: 14px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShowMore = styled(Link)`
  text-decoration: underline;
  font-size: 14px;
  background: none;
  color: #222;
  border: none;
  padding-left: 5px;
  cursor: pointer;
`;

function CardDescription({ desc, id }) {
  return (
    <Description>
      <span>
        {desc.split(" ").slice(0, 20).join(" ")}
        <ShowMore to={`/product/:${id}`}>view more</ShowMore>
      </span>
    </Description>
  );
}

export default CardDescription;
