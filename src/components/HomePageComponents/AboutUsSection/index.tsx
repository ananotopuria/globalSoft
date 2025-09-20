import { useTranslation } from "react-i18next";
import { AboutSection, AboutInner, Headline, Body } from "./styles";

type Props = { bg?: string };

export default function AboutUsSection({ bg = "/assets/cubes.avif" }: Props) {
  const { t } = useTranslation();
  return (
    <AboutSection $bg={bg}>
      <AboutInner>
        <Headline>{t("pages.home.about.headline")}</Headline>
        <Body>{t("pages.home.about.companyBody")}</Body>
      </AboutInner>
    </AboutSection>
  );
}
