import React from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps {
  buttonText: string;
  isPrimary: boolean;
}

export const Button = ({ buttonText, isPrimary }: ButtonProps) => {
  return <StyledButton $isPrimary={isPrimary}>{buttonText}</StyledButton>;
};
