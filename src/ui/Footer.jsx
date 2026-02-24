import styled from "styled-components";

const FooterWrapper = styled.footer`
  font-size: 18px;
  color: #ddd;
  background-color: red;
`;

function Footer() {
  return (
    <FooterWrapper>&copy; 2026 Modern Shop. All rights reserved.</FooterWrapper>
  );
}

export default Footer;
