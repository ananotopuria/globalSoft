import { useTranslation } from "react-i18next";

function Navigation() {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>{t("nav.home")}</li>
        <li>{t("nav.services")}</li>
        <li>{t("nav.about")}</li>
        <li>{t("nav.portfolio")}</li>
        <li>{t("nav.contact")}</li>
      </ul>
    </nav>
  );
}

export default Navigation;
