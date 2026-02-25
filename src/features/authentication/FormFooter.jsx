import { SpinnerSmall } from "../../ui/Spinner";
import { Link } from "react-router";
import styled from "styled-components";

const Btn = styled.button`
  font-size: 18px;
  font-weight: 700;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #9999993a;
  text-decoration: none;
  padding: 10px 15px;
  background-color: ${(props) =>
    props?.$primary
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  color: ${(props) => (props?.$primary ? "#fff" : "#222")};
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    background-color: ${(props) =>
      props.$primary
        ? props.theme.colors.hoverPrimary
        : props.theme.colors.hoverSecondary};
  }
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
  > a {
    text-decoration: none;
  }
`;
function FormFooter({ btnText, isPending, linkText, to, text }) {
  return (
    <>
      <Btn type="submit" style={{ width: "100%" }} $primary={true}>
        {isPending ? <SpinnerSmall /> : btnText}
      </Btn>
      <Text>
        <p>{text}</p>
        <Link to={`/${to}`}>{linkText}</Link>
      </Text>
    </>
  );
}

export default FormFooter;
