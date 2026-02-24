import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router";

const MobileList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 5px;
`;
const ListItem = styled.li`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  &:hover {
    background-color: #eee;
  }
`;

const NavLink = styled(Link)`
  &:visited,
  &:link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: #222;
    text-decoration: none;
  }
  &:hover,
  &:active {
    text-decoration: none;
  }
`;
function MobileNavList() {
  return (
    <MobileList>
      <ListItem>
        <NavLink to="/">Products</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/cart">
          <ShoppingCartOutlinedIcon />
          Cart
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/login">Login</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/signup">Sign Up</NavLink>
      </ListItem>
    </MobileList>
  );
}

export default MobileNavList;
