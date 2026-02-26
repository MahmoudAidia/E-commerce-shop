import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import Button from "./Button";
import Notification from "../features/cart/Notification";

const RightNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  > a {
    > svg {
      width: 20px;
      height: 20px;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

function RightNav() {
  return (
    <RightNavWrapper>
      <Button page="/cart">
        <ShoppingCartOutlinedIcon />
        <Notification />
      </Button>
      <Button page="/login">Login</Button>
      <Button page="/signup" primary={true}>
        Sign Up
      </Button>
    </RightNavWrapper>
  );
}

export default RightNav;
