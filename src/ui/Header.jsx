import { Link } from "react-router";
import styled from "styled-components";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import RightNav from "./RightNav";
import MobileNav from "./MobileNav";
import StyledLink from "./StyledLink";

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

const ProductsNav = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderWrapper = styled.header`
  margin: 0 50px;
  padding: ${(props) => props.theme.padding};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin: ${(props) => props.theme.marginSmall};
  }
`;

function Header() {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo />
        <ProductsNav>
          <StyledLink
            style={{
              border: "none",
              fontSize: "16px",
            }}
            to="/"
          >
            Products
          </StyledLink>
        </ProductsNav>
        <ProductsNav>
          <StyledLink
            to="/addProduct"
            style={{
              border: "none",
              fontSize: "16px",
            }}
          >
            Create Product
          </StyledLink>
        </ProductsNav>
        <RightNav />
        <MobileNav />
      </HeaderWrapper>
    </Wrapper>
  );
}

export default Header;
