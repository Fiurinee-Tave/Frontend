import styled from "styled-components";

const Wrapper = styled.button`
  width: 40px;
  height: 40px;
  background-color: rgba(190, 190, 190, 0.7);
  border-radius: 10px;
  border: 2px solid #777777;
  padding: 5px;
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
          d="M21.5 5.5L8.4375 18.5L2.5 12.5909"
          stroke="#333333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Wrapper>
  );
}

export default IconCheck;
