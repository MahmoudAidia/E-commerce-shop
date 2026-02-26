import { useCart } from "../../context/CartContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import BackToProducts from "../../ui/BackToProducts";
import { showSuccessToast } from "../../ui/Toasts";

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
function ProductActions({ handleAddToCart }) {
  return (
    <Box>
      <Btn onClick={handleAddToCart}>
        <ShoppingCartOutlinedIcon />
        Add To Cart
      </Btn>
      <BackToProducts />
    </Box>
  );
}

export default ProductActions;
