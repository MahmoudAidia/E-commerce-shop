import { useState } from "react";
import { SIGNUP_INPUTS } from "../../utils/Constants";
import { Link, useNavigate } from "react-router";
import { useCreateUser } from "./useCreateUser";
import { showErrorToast } from "../../ui/Toasts";
import { handleSignupInput } from "../../utils/helper";

import styled from "styled-components";
import InputField from "./InputField";
import SignupHeader from "./SignupHeader";
import FormFooter from "./FormFooter";

const SignupBox = styled.form`
  padding: 20px;
  border-radius: 10px;
  background-color: #f9fafb;
  border: 1px solid rgba(153, 153, 153, 0.529);
`;

function SignupForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const { mutateAsync, isError, isPending } = useCreateUser();

  async function handleSubmit(e) {
    e.preventDefault();
    user.id = Math.random() * 10000;
    if (!handleSignupInput(user)) {
      return;
    }
    if (user.confirmPassword !== user.password) {
      showErrorToast("Passwords do not match.");
      setUser((prev) => {
        return { ...prev, confirmPassword: "" };
      });
      return;
    }
    const newUser = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    const { id } = await mutateAsync(newUser);

    setUser({
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    });
    // navigate("/");
  }

  return (
    <SignupBox onSubmit={handleSubmit}>
      <SignupHeader
        title={"Create an Account"}
        text={"Sign up to start shopping"}
      />
      {SIGNUP_INPUTS.map((item) => (
        <InputField
          key={item.label}
          item={item}
          handleChange={setUser}
          user={user}
        />
      ))}
      <FormFooter
        btnText={"Create Account"}
        isPending={isPending}
        to={"login"}
        linkText={"Login"}
        text={"Already have an account?"}
      />
    </SignupBox>
  );
}

export default SignupForm;
