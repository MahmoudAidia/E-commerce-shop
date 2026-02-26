import { Link } from "react-router";
import styled from "styled-components";

const ButtonWrapper = styled(Link)`
  &:link,
  &:visited {
    position: relative;
    font-size: 14px;
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #9999993a;
    text-decoration: none;
    padding: 10px;
    background-color: ${(props) =>
      props?.$primary
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    color: ${(props) => (props?.$primary ? "#fff" : "#222")};
    cursor: pointer;
    transition: all 0.4s;
  }
  &:hover,
  &:active {
    background-color: ${(props) =>
      props.$primary
        ? props.theme.colors.hoverPrimary
        : props.theme.colors.hoverSecondary};
  }
`;

function Button({ type, style, children, primary = false, page }) {
  return (
    <ButtonWrapper type={type} style={style} $primary={primary} to={page}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
