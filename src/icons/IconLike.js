import styled from "styled-components";

const Wrapper = styled.button`
  width: 45px;
  height: 45px;
  border: 2px solid #fdb9b9;
  border-radius: 10px;
  background-color: white;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function IconLike({ like }) {
  return (
    <Wrapper>
      <svg
        dataslot="icon"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={
          like === true
            ? { fill: "#EA8989", color: "#EA8989" }
            : { color: "#EA8989" }
        }
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </Wrapper>
  );
}

export default IconLike;
