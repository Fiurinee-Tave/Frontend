import styled from "styled-components";
import IconSearch from "../icons/IconSearch";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: gray;
`;

const PageButton = styled.button`
  background: none;
  border: none;
  color: gray;

  cursor: pointer;
`;

const pageList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

function PageNumber({ page, handlePage, searchMode }) {
  return (
    <Wrapper>
      <IconSearch
        top={false}
        clickPage={() => handlePage(0)}
        color={searchMode ? "black" : "#888888"}
      />
      {pageList.map((v, i) => (
        <PageButton
          key={i}
          onClick={() => handlePage(v)}
          style={{ color: !searchMode && v === page ? "black" : null }}
        >
          {v}
        </PageButton>
      ))}
    </Wrapper>
  );
}

export default PageNumber;
