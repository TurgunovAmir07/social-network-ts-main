import styled from "styled-components";

export const PostFormBox = styled.form`
  display: flex;
  flex-flow: column;
  background: #fefefe;
  padding: 16px;
  border-radius: 8px;
  width: 480px;
`;

export const PostFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const PostFormContent = styled.div`
  margin-bottom: 32px;
`;

export const PostFormFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  button {
    max-width: 120px;
    &:first-child {
      margin-right: 8px;
    }
  }
`;
