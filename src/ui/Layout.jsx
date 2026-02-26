import styled from "styled-components";
import Header from "./Header";
import { useState } from "react";
import Modal from "./Modal";
import MobileNavList from "./MobileNavList";

export const Application = styled.div`
  margin-top: 100px;
  padding-bottom: 30px;
  position: relative;
`;
function Layout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Application>
      <Header setOpenNav={setOpenNav} />
      {children}

      {openNav && (
        <Modal isOpen={openNav} onClose={setOpenNav} title={"Navigation"}>
          <MobileNavList handleClick={setOpenNav} />
        </Modal>
      )}
    </Application>
  );
}

export default Layout;
