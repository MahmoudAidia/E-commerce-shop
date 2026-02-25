import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import styled from "styled-components";
import StyledLink from "../../ui/StyledLink";
const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 15px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const Btn = styled.button`
  font-size: 14px;
  background: none;
  padding: 10px;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  width: 130px;
  justify-content: center;
  transition: all 0.4s;
  &:hover {
    background-color: ${(props) => props.theme.colors.hoverPrimary};
  }
`;
function ProductActions() {
  return (
    <Box>
      <Btn>
        <ShoppingCartOutlinedIcon />
        Add To Cart
      </Btn>
      <StyledLink to={"/"} style={{ width: "180px" }}>
        <ArrowBackOutlinedIcon />
        Back To Products
      </StyledLink>
    </Box>
  );
}

export default ProductActions;
