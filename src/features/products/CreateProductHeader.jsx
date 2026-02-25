import styled from "styled-components";
import StyledLink from "../../ui/StyledLink";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Heading = styled.div`
  background-color: #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
  > a {
    margin-bottom: 10px;
  }

  > h2,
  p {
    margin-bottom: 10px;
    padding-left: 5px;
  }
`;

function CreateProductHeader() {
  return (
    <Heading>
      <StyledLink
        to={"/"}
        style={{ width: "180px", border: "none", margineBottom: "20px" }}
      >
        <ArrowBackOutlinedIcon />
        Back To Products
      </StyledLink>

      <h2>Create New Product</h2>
      <p>Add a new product to your inventory</p>
    </Heading>
  );
}

export default CreateProductHeader;
