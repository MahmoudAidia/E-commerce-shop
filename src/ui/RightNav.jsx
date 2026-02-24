import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import Button from "./Button";

const RightNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

function RightNav() {
  return (
    <RightNavWrapper>
      <Button page="/cart">
        <ShoppingCartOutlinedIcon />
      </Button>
      <Button page="/login">Login</Button>
      <Button page="/signup" primary={true}>
        Sign Up
      </Button>
    </RightNavWrapper>
  );
}

export default RightNav;
