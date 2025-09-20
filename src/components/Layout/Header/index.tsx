import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../../assets/images/globalsoftlogoblack.png";
import LanguageMenu from "./LanguageMenu";
import Navigation from "./Navigation";
import {
  HeaderBar,
  Logo,
  MobileOnly,
  BurgerButton,
  Backdrop,
  Drawer,
  DrawerPanel,
  CloseRow,
  DrawerList,
} from "./styles";
import NavItems from "./Navigation/NavItems";

function Header() {
  const [open, setOpen] = useState(false);
  const firstFocusableRef = useRef<HTMLButtonElement | null>(null);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) firstFocusableRef.current?.focus();
  }, [open]);

  return (
    <HeaderBar>
      <Logo as={Link} to="/" aria-label="Go to home">
        <img src={LogoImg} alt="GlobalSoft logo" />
      </Logo>

      <Navigation />

      <LanguageMenu />

      <MobileOnly>
        <BurgerButton
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </BurgerButton>
      </MobileOnly>

      {open && <Backdrop onClick={close} />}
      <Drawer id="mobile-drawer" data-open={open}>
        <DrawerPanel role="dialog" aria-modal="true" aria-label="Main menu">
          <CloseRow>
            <button
              ref={firstFocusableRef}
              type="button"
              aria-label="Close menu"
              onClick={close}
            >
              ✕
            </button>
          </CloseRow>

          <DrawerList>
            <ul>
              <NavItems onLinkClick={close} />
            </ul>
          </DrawerList>
        </DrawerPanel>
      </Drawer>
    </HeaderBar>
  );
}

export default Header;
