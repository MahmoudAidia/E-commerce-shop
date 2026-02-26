import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Layout from "../ui/Layout";

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
    <Layout>
      <LoginWrapper>
        <LoginForm />
      </LoginWrapper>
    </Layout>
  );
}

export default Login;
