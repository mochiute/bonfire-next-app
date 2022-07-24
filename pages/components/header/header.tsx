import Input from "../input/input";
import Logo from "../logo/logo";
import { HeaderContainer, HeaderItems, InputHolder } from "./header-styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <InputHolder>
        <Input placeholder="Pesquisar" fullWidth />
      </InputHolder>
      <HeaderItems></HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
