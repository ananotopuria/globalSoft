import { DesktopNav, NavList } from "./styles";
import NavItems from "./NavItems";

interface NavigationProps {
  onLinkClick?: () => void;
}

function Navigation({ onLinkClick }: NavigationProps) {
  return (
    <DesktopNav>
      <NavList>
        <NavItems onLinkClick={onLinkClick} />
      </NavList>
    </DesktopNav>
  );
}

export default Navigation;
