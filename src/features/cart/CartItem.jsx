import styled from "styled-components";
import CartItemDetails from "./CartItemDetails";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "../../context/CartContext";

const Item = styled.li`
  border: 1px solid #9999994f;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Delete = styled.button`
  border: none;
  background: none;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;
  color: red;
  &:hover {
    background-color: #f184843f;
  }
`;

function CartItem({ item }) {
  const { removeItem } = useCart();
  return (
    <Item>
      <CartItemDetails item={item} />
      <Delete onClick={() => removeItem(item.id)}>
        <DeleteOutlineIcon />
        Remove
      </Delete>
    </Item>
  );
}

export default CartItem;
