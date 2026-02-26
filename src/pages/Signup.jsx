import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Layout from "../ui/Layout";

const SignupWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 0 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 50px;
`;

function Signup() {
  return (
    <Layout>
      <SignupWrapper>
        <SignupForm />
      </SignupWrapper>
    </Layout>
  );
}

export default Signup;
