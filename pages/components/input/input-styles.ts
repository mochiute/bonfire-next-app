import { styled } from "../../stitches.config";

export const StyledInput = styled("input", {
  width: 200,
  height: 40,

  fontSize: "$16",
  color: "$font1",

  background: "$backgroundUI1",

  border: "none",
  outline: "none",

  padding: "12px 16px",

  borderRadius: "5px",

  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
  },
});
