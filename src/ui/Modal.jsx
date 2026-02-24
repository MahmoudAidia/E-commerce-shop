import styled from "styled-components";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 500px;
  max-width: 90%; /* responsive for small screens */
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  /* Responsive font & padding */
  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 10px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    color: red;
  }
`;

const ModalHeader = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ModalBody = styled.div`
  font-size: 1rem;
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <Overlay onClick={() => onClose(false)}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => onClose(false)}>
          <ClearOutlinedIcon />
        </CloseButton>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    </Overlay>
  );
}
