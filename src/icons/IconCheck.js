import styled from "styled-components";

const Wrapper = styled.button`
  width: 40px;
  height: 40px;
  background-color: rgba(190, 190, 190, 0.7);
  border-radius: 10px;
  border: 2px solid #777777;
  padding: 5px;
  cursor: pointer;

  @media (max-width: 575px) {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1.5px solid #777777;
  }
`;

function IconCheck({ onClick, mode }) {
  return (
    <Wrapper onClick={onClick}>
      <svg
        width={mode === "mobile" ? "18" : "26"}
        height={mode === "mobile" ? "18" : "26"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5 5.5L8.4375 18.5L2.5 12.5909"
          stroke="#333333"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrapper>
  );
}

export default IconCheck;
