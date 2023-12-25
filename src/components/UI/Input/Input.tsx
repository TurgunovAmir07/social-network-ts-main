import { ErrorMessage, StyledInput } from "./Input.style";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  isError?: boolean;
}

export const Input = ({
  type,
  placeholder,
  errorMessage,
  isError,
  ...props
}: IInputProps) => {
  return (
    <div className="InputContainer">
      <StyledInput
        type={type}
        $isError={isError || false}
        placeholder={placeholder}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
