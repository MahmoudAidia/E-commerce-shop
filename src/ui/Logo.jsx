import { Link } from "react-router";

import styled from "styled-components";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  &:link,
  &:visited {
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
    color: #111;
  }
  &:hover,
  &:active {
    color: #222;
  }
  > svg {
    color: #0051a3;
  }
`;

function Logo() {
  return (
    <LogoWrapper to="/">
      <StoreOutlinedIcon />
      <span>Modern Shop</span>
    </LogoWrapper>
  );
}

export default Logo;
