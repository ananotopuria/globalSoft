import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  HeroSection,
  HeroInner,
  Headline,
  SubTitle,
  Body,
  Actions,
  PrimaryBtn,
  SecondaryBtn,
} from "./styles";

type Props = { bg?: string };

export default function Hero({ bg = "/assets/hero-bg.avif" }: Props) {
  const { t } = useTranslation();
  return (
    <HeroSection $bg={bg}>
      <HeroInner>
        <Headline>{t("pages.home.hero.headline")}</Headline>
        <SubTitle>{t("pages.home.hero.companyTitle")}</SubTitle>
        <Body>{t("pages.home.hero.companyBody")}</Body>
        <Actions>
          <PrimaryBtn as={Link} to="/portfolio">
            {t("pages.home.hero.ctaPortfolio")}
          </PrimaryBtn>
          <SecondaryBtn as={Link} to="/contact">
            {t("pages.home.hero.ctaContact")}
          </SecondaryBtn>
        </Actions>
      </HeroInner>
    </HeroSection>
  );
}
