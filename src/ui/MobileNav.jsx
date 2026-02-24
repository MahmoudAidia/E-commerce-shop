import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import styled from "styled-components";
import Modal from "./Modal";
import MobileNavList from "./MobileNavList";
const MobileNavWrapper = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  display: none;
  > svg {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

function MobileNav({ handleClick }) {
  const [openNav, setOpenNav] = useState(false);
  return (
    <MobileNavWrapper onClick={() => setOpenNav(true)}>
      <MenuOutlinedIcon />

      {openNav && (
        <Modal isOpen={openNav} onClose={setOpenNav} title={"Navigation"}>
          <MobileNavList />
        </Modal>
      )}
    </MobileNavWrapper>
  );
}

export default MobileNav;
