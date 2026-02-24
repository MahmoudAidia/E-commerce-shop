import styled from "styled-components";

const WrapperBox = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;
`;
function Wrapper({ children }) {
  return <WrapperBox>{children}</WrapperBox>;
}

export default Wrapper;
