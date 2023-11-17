import React from "react";
import { InputContainer, StyledInput, ErrorMessage } from "./Input.style";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isError: boolean;
}

export const Input = ({
  type,
  placeholder,
  errorMessage,
  isError,
}: IInputProps) => {
  return (
    <InputContainer>
      <StyledInput type={type} placeholder={placeholder} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
