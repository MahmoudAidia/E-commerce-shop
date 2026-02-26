import styled from "styled-components";
import Header from "./Header";

export const Application = styled.div`
  margin-top: 100px;
  padding-bottom: 30px;
`;
function Layout({ children }) {
  return (
    <Application>
      <Header />
      {children}
    </Application>
  );
}

export default Layout;
