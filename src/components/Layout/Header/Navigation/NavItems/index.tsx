import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export interface NavItemsProps {
  onLinkClick?: () => void;
}

export default function NavItems({ onLinkClick }: NavItemsProps) {
  const { t } = useTranslation();
  return (
    <>
      <li>
        <NavLink to="/" end onClick={onLinkClick}>
          {t("nav.home")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" onClick={onLinkClick}>
          {t("nav.services")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={onLinkClick}>
          {t("nav.about")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" onClick={onLinkClick}>
          {t("nav.portfolio")}
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" onClick={onLinkClick}>
          {t("nav.contact")}
        </NavLink>
      </li>
    </>
  );
}
