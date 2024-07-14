import styled from "styled-components";

const Wrapper = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;

  border-radius: 50%;

  cursor: pointer;
`;

const PageWrap = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;

  border-radius: 50%;

  cursor: pointer;
`;

function IconSearch({ top, clickPage, clickSearch, color }) {
  return top ? (
    <Wrapper onClick={clickSearch}>
      <svg
        width="54"
        height="57"
        viewBox="0 0 54 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5 44C35.0604 44 42 36.8365 42 28C42 19.1635 35.0604 12 26.5 12C17.9396 12 11 19.1635 11 28C11 36.8365 17.9396 44 26.5 44Z"
          stroke="#888888"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M37.374 39.4507L46.92 49.527"
          stroke="#888888"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrapper>
  ) : (
    <PageWrap onClick={clickPage}>
      <svg
        width="54"
        height="57"
        viewBox="0 0 54 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5 44C35.0604 44 42 36.8365 42 28C42 19.1635 35.0604 12 26.5 12C17.9396 12 11 19.1635 11 28C11 36.8365 17.9396 44 26.5 44Z"
          stroke="#888888"
          strokeWidth="5"
          strokeLinejoin="round"
          stroke={color}
        />
        <path
          d="M37.374 39.4507L46.92 49.527"
          stroke="#888888"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke={color}
        />
      </svg>
    </PageWrap>
  );
}

export default IconSearch;
