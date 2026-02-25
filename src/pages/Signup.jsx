import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";

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
    <SignupWrapper>
      <SignupForm />
    </SignupWrapper>
  );
}

export default Signup;
