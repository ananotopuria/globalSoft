import styled from "styled-components";
import Navigation from "./Navigation";
import LanguageMenu from "./LanguageMenu";

const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
`;

function Header() {
  return (
    <HeaderBar>
      <Navigation />
      <LanguageMenu />
    </HeaderBar>
  );
}

export default Header;
