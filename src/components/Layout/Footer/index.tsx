import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FooterBottom,
  FooterCol,
  FooterGrid,
  FooterText,
  FooterTitle,
  FooterWrapper,
} from "./styles";

function Footer() {
  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <FooterGrid>
        <FooterCol>
          <FooterTitle>{t("footer.brand")}</FooterTitle>
          <FooterText>{t("footer.tagline")}</FooterText>
        </FooterCol>

        <FooterCol>
          <FooterTitle>{t("footer.location")}</FooterTitle>
          <FooterText>{t("footer.address")}</FooterText>
          <FooterText>{t("footer.founded")}</FooterText>
        </FooterCol>

        <FooterCol>
          <FooterTitle>{t("footer.about")}</FooterTitle>
          <ul>
            <li>
              <Link to="/">{t("footer.links.home")}</Link>
            </li>
            <li>
              <Link to="/services">{t("footer.links.services")}</Link>
            </li>
            <li>
              <Link to="/about">{t("footer.links.about")}</Link>
            </li>
            <li>
              <Link to="/portfolio">{t("footer.links.portfolio")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("footer.links.contact")}</Link>
            </li>
          </ul>
        </FooterCol>

        <FooterCol>
          <FooterTitle>{t("footer.contact.title")}</FooterTitle>
          <FooterText>{t("footer.contact.phone")}</FooterText>
          <FooterText>{t("footer.contact.email")}</FooterText>
        </FooterCol>

        <FooterCol>
          <FooterTitle>{t("footer.services.title")}</FooterTitle>
          <ul>
            <li>{t("footer.services.frontend")}</li>
            <li>{t("footer.services.backend")}</li>
            <li>{t("footer.services.web")}</li>
            <li>{t("footer.services.mobile")}</li>
          </ul>
        </FooterCol>
        <FooterCol>
          <FooterTitle>{t("footer.policies.title")}</FooterTitle>
          <ul>
            <li>
              <Link to="/terms">{t("footer.policies.terms")}</Link>
            </li>
            <li>
              <Link to="/privacy">{t("footer.policies.privacy")}</Link>
            </li>
            <li>
              <Link to="/data-deletion">{t("footer.policies.deletion")}</Link>
            </li>
          </ul>
        </FooterCol>
      </FooterGrid>

      <FooterBottom>
        © {new Date().getFullYear()} {t("footer.brand")}. All rights reserved.
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
