import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.red};
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  /* margin-bottom: 20px; */
  border: 2px solid ${(props) => props.theme.colors.disabledBgc};
  background-color: transparent;

  &:last-child {
    margin-bottom: 40px;
  }

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }
  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
`;

// import { styled } from "styled-components";

// export const StyledInput = styled.input`
//   border: 1px solid transparent;
//   outline: 0;
//   font-family: inherit;
//   padding: 12px 15px;
//   background-color: var(--bgc);
//   border-radius: 10px;
//   border: 1px solid transparent;

//   transition: 200ms;

//   &:is(:hover, :focus) {
//     border-color: var(--prime-color);
//   }

//   @media (max-width: 730px) {
//     padding: 10px 12px;
//   }
// `;
