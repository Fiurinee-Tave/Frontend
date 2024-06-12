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

function IconPencil({ onClick, mode }) {
  return (
    <Wrapper onClick={onClick}>
      <svg
        width={mode === "mobile" ? "18" : "26"}
        height={mode === "mobile" ? "18" : "26"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_73_9898)">
          <mask
            id="mask0_73_9898"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <path d="M24 0H0V24H24V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_73_9898)">
            <path
              d="M15.5 4.49951L19.5 8.4995"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.00001 15.9995L17.9999 2L22 5.9995L8 19.9995L3 20.9995L4.00001 15.9995Z"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 4.49951L19.5 8.4995"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 15.9995L8 19.4995"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 17.4995L17.5 6.49951"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_73_9898">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  );
}

export default IconPencil;
