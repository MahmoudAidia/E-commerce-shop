import styled from "styled-components";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { PAGINATION_SIZE } from "../../utils/Constants";
import { useState } from "react";

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 18px;
  text-decoration: underline;

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }
`;

function Pagination({ productsNum, setDisplayedProducts }) {
  const [active, setActive] = useState(1);

  const pagesNum = Math.ceil(productsNum / PAGINATION_SIZE);
  const pageSize = productsNum / pagesNum;

  function handleClick(e) {
    const i = Number(e.target.value);
    const start = i !== 1 ? (i - 1) * pageSize : i - 1;
    const end = start + pageSize;
    setDisplayedProducts((prev) => {
      return { start, end, filter: "all", sort: "all" };
    });
    setActive(i);
  }

  const pages = [];
  for (let i = 1; i <= pagesNum; i++) {
    pages.push(i);
  }

  return (
    <PaginationWrapper>
      {pages.map((item) => (
        <Button
          style={{
            backgroundColor: item === active ? "#6366F1" : "#fff",
            color: item === active ? "#FFF" : "#222",
          }}
          key={item}
          value={item}
          onClick={handleClick}
        >
          {item}
        </Button>
      ))}
    </PaginationWrapper>
  );
}

export default Pagination;
