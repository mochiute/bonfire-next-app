import { DefaultPageTemplateContainer } from "./templates/default-page-template/default-page-template-styles";
import { Header } from "./components";

function Home() {
  return (
    <DefaultPageTemplateContainer>
      <Header />
    </DefaultPageTemplateContainer>
  );
}

export default Home;
