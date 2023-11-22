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
  ...props
}: IInputProps) => {
  return (
    <InputContainer>
      <StyledInput
        $isError={isError}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
