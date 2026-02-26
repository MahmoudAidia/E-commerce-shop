import StyledLink from "./StyledLink";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function BackToProducts() {
  return (
    <StyledLink to={"/"} style={{ width: "180px" }}>
      <ArrowBackOutlinedIcon />
      Back To Products
    </StyledLink>
  );
}

export default BackToProducts;
