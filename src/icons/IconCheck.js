import styled from "styled-components";

const Wrapper = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bebebe;
  border: 2px solid #777777;
  border-radius: 5px;

  position: absolute;
  right: 15px;
  bottom: 15px;

  cursor: pointer;
`;

function IconCheck({ onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12.9L10.1429 16.5L18 7.5"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Wrapper>
  );
}

export default IconCheck;
