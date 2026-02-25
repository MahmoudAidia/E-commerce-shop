import toast from "react-hot-toast";
import { CheckCircle, XCircle } from "lucide-react";
import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%); 
    opacity: 0;
  }
  to {
    transform: translateX(0);    
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);     
    opacity: 1;
  }
  to {
    transform: translateX(100%);  
    opacity: 0;
  }
`;
const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background: #1e1e2f;
  color: #fff;
  padding: 14px 18px;
  border-radius: 14px;
  width: fit-content;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);
  animation: ${({ visible }) =>
    visible
      ? css`
          ${slideIn} 0.25s ease forwards
        `
      : css`
          ${slideOut} 0.25s ease forwards
        `};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ type }) => (type === "success" ? "#22c55e" : "#ef4444")};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  .message {
    font-size: 13px;
    opacity: 0.8;
    margin-top: 2px;
    text-transform: capitalize;
  }
`;

// --- Toast functions ---
export const showSuccessToast = (message) => {
  toast.custom((t) => (
    <ToastWrapper visible={t.visible}>
      <IconWrapper type="success">
        <CheckCircle size={20} />
      </IconWrapper>
      <Content>
        <span className="message">{message}</span>
      </Content>
    </ToastWrapper>
  ));
};

export const showErrorToast = (message) => {
  toast.custom((t) => (
    <ToastWrapper visible={t.visible}>
      <IconWrapper type="error">
        <XCircle size={20} />
      </IconWrapper>
      <Content>
        <span className="message">{message}</span>
      </Content>
    </ToastWrapper>
  ));
};
