import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import styled from "styled-components";

const SignHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > svg {
    background-color: ${(props) => props.theme.colors.primary};
    width: 80px;
    height: 80px;
    padding: 20px;
    border-radius: 50%;
    color: #fff;
    margin-bottom: 10px;
  }
  > h2 {
    margin-bottom: 10px;
  }
  > p {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    svg {
      width: 50px;
      height: 50px;
      padding: 10px;
    }
    p {
      text-align: center;
    }
  }
`;
function SignupHeader({ title, text }) {
  return (
    <SignHeader>
      <StoreOutlinedIcon />
      <h2>{title}</h2>
      <p>{text}</p>
    </SignHeader>
  );
}

export default SignupHeader;
