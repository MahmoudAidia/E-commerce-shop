import styled from "styled-components";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import { Link } from "react-router";
import { style } from "@mui/system";
import RightNav from "./RightNav";
import MobileNav from "./MobileNav";

const ProductLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  &:link,
  &:visited {
    color: #222;
  }
  &:hover,
  &:active {
    color: #333;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderWrapper = styled.header`
  padding: 30px 0;
  margin: 0 40px;
  width: calc(100%- 80px);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo />
        <ProductLink to="/">Products</ProductLink>
        <RightNav />
        <MobileNav />
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Header;
