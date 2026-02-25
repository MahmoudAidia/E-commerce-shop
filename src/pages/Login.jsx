import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
const LoginWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 50px;
`;
function Login() {
  return (
    <LoginWrapper className="login">
      <LoginForm />
    </LoginWrapper>
  );
}

export default Login;
