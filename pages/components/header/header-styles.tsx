import { styled } from "../../stitches.config";

export const HeaderContainer = styled("div", {
  width: "100%",
  height: 110,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  borderBottom: "solid 1px $colors$border1",

  paddingTop: 50,
});

export const InputHolder = styled("div", {
  width: 700,
});

export const HeaderItems = styled("div", {
  width: 120,
});
