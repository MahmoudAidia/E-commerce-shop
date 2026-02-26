import { Link } from "react-router";
import styled from "styled-components";
import Logo from "./Logo";
import RightNav from "./RightNav";
import MobileNav from "./MobileNav";
import StyledLink from "./StyledLink";

const ProductsNav = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const HeaderWrapper = styled.header`
  /* padding: ${(props) => props.theme.padding}; */
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 0px 30px;
  top: 0px;
  right: 50%;
  transform: translate(50%);
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <ProductsNav>
        <StyledLink
          style={{
            border: "none",
            fontSize: "16px",
            textAlign: "center",
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
            textAlign: "center",
          }}
        >
          Create Product
        </StyledLink>
      </ProductsNav>
      <RightNav />
      <MobileNav />
    </HeaderWrapper>
  );
}

export default Header;
