import { useTranslation } from "react-i18next";
import { FiTarget, FiZap, FiShield } from "react-icons/fi";
import {
  PageWrap,
  Container,
  HeaderBlock,
  Title,
  Subtitle,
  Lead,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueText,
} from "./styles";

function AboutUsPageComponents() {
  const { t } = useTranslation();

  return (
    <PageWrap>
      <Container>
        <HeaderBlock>
          <Title>{t("pages.about.title")}</Title>
          <Subtitle>{t("pages.about.who.title")}</Subtitle>
          <Lead>{t("pages.about.who.body")}</Lead>
        </HeaderBlock>

        <section aria-labelledby="values-title">
          <h2
            id="values-title"
            style={{ position: "absolute", left: "-9999px" }}
          >
            {t("pages.about.valuesTitle")}
          </h2>

          <ValuesGrid>
            <ValueCard tabIndex={0}>
              <ValueIcon aria-hidden>
                <FiTarget />
              </ValueIcon>
              <ValueTitle>{t("pages.about.values.precision.title")}</ValueTitle>
              <ValueText>{t("pages.about.values.precision.text")}</ValueText>
            </ValueCard>

            <ValueCard tabIndex={0}>
              <ValueIcon aria-hidden>
                <FiZap />
              </ValueIcon>
              <ValueTitle>
                {t("pages.about.values.innovation.title")}
              </ValueTitle>
              <ValueText>{t("pages.about.values.innovation.text")}</ValueText>
            </ValueCard>

            <ValueCard tabIndex={0}>
              <ValueIcon aria-hidden>
                <FiShield />
              </ValueIcon>
              <ValueTitle>
                {t("pages.about.values.reliability.title")}
              </ValueTitle>
              <ValueText>{t("pages.about.values.reliability.text")}</ValueText>
            </ValueCard>
          </ValuesGrid>
        </section>
      </Container>
    </PageWrap>
  );
}

export default AboutUsPageComponents;
