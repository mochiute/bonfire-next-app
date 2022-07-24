import { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./input-styles";
import type * as Stitches from "@stitches/react";

type StyledInputVariants = Stitches.VariantProps<typeof StyledInput>;

const Input: FC<
  InputHTMLAttributes<HTMLInputElement> & StyledInputVariants
> = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default Input;
