import styled from "styled-components";

const EmptyWrapper = styled.h2`
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;
function Empty({ children }) {
  return <EmptyWrapper>{children}</EmptyWrapper>;
}

export default Empty;
