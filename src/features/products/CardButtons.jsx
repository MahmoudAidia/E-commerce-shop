import { Link } from "react-router";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useCart } from "../../context/CartContext";
import { showSuccessToast } from "../../ui/Toasts";

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const AddToCart = styled.button`
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

const ViewDetails = styled(Link)`
  &:link,
  &:visited {
    font-size: 14px;
    color: #222;
    width: 140px;
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

function CardButtons({ id, item }) {
  const { addItem } = useCart();
  function handleAddToCart() {
    addItem(item);
    showSuccessToast(
      `${item.title.split(" ").slice(0, 3).join(" ")} was add to the cart.`,
    );
  }
  return (
    <ButtonBox>
      <ViewDetails to={`/product/${id}`}>
        <VisibilityOutlinedIcon />
        View Details
      </ViewDetails>
      <AddToCart onClick={handleAddToCart}>
        <ShoppingCartOutlinedIcon />
        Add To Cart
      </AddToCart>
    </ButtonBox>
  );
}

export default CardButtons;
