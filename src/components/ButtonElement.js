import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
// export const Button = styled`
//   border-radius: 50px;
//   background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
//   color: ${({ dark }) => (dark ? "#010606" : "#fff")};
//   font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
//   }
// `;
