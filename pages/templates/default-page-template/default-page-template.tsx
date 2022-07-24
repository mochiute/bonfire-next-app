import { FC } from "react";
import { DefaultPageTemplateContainer } from "./default-page-template-styles";

const DefaultPageTemplate: FC = ({ children }) => {
  return (
    <DefaultPageTemplateContainer>{children}</DefaultPageTemplateContainer>
  );
};

export default DefaultPageTemplate;
