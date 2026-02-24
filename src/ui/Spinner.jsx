import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 !important;
`;

export const SpinnerItem = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #0088fe;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 0 !important;
  width: ${(props) => (props.$size === "large" ? "50px" : "25px")};
  height: ${(props) => (props.$size === "large" ? "50px" : "25px")};
`;

const Spinner = ({ size = "large" }) => {
  return (
    <LoaderContainer>
      <SpinnerItem $size={size} />
    </LoaderContainer>
  );
};

export default Spinner;
