import styled from "styled-components";
import SignupHeader from "./SignupHeader";
import { LOGIN_INPUTS } from "../../utils/Constants";
import InputField from "./InputField";
import { useState } from "react";
import FormFooter from "./FormFooter";
import { useCreateUser } from "./useCreateUser";
import { handleLoginInputs } from "../../utils/helper";
import { showErrorToast } from "../../ui/Toasts";
import { useLoginUser } from "./useLoginUser";

const LoginBox = styled.form`
  padding: 20px;
  border-radius: 10px;
  background-color: #f9fafb;
  border: 1px solid rgba(153, 153, 153, 0.529);
`;

function LoginForm() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { mutateAsync, isPending } = useLoginUser();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!handleLoginInputs(user)) {
      return;
    }

    const { token } = await mutateAsync(user);
    localStorage.setItem("token", token);
  }
  return (
    <LoginBox onSubmit={handleSubmit}>
      <SignupHeader
        title={"Create an Account"}
        text={"Sign up to start shopping"}
      />
      {LOGIN_INPUTS.map((item) => (
        <InputField
          key={item.label}
          item={item}
          handleChange={setUser}
          user={user}
        />
      ))}
      <FormFooter
        isPending={isPending}
        btnText={"Login"}
        to={"signup"}
        linkText={"Signup"}
        text={"Don't have an account!"}
      />
    </LoginBox>
  );
}

export default LoginForm;
