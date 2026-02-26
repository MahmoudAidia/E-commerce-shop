import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkElm = styled(Link)`
  &:link,
  &:visited {
    font-size: 14px;
    color: #222;
    width: 100%;
    text-decoration: none;
    border: 1px solid #999;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }
`;

function StyledLink({ children, style, to }) {
  return (
    <LinkElm to={to} style={style}>
      {children}
    </LinkElm>
  );
}

export default StyledLink;
