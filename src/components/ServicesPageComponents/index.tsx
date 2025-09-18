import { useTranslation } from "react-i18next";
import {
  Card,
  CardIcon,
  CardText,
  CardTitle,
  Container,
  Grid,
  HeaderBlock,
  Intro,
  PageWrap,
  Title,
} from "./styles";
import { FiMonitor, FiServer, FiGlobe, FiSmartphone } from "react-icons/fi";

function ServicesPageComponents() {
  const { t } = useTranslation();

  return (
    <PageWrap>
      <Container>
        <HeaderBlock>
          <Title id="what-we-do-title">{t("pages.whatWeDo.title")}</Title>
          <Intro>{t("pages.whatWeDo.intro")}</Intro>
        </HeaderBlock>

        <section aria-labelledby="services-title">
          <h2
            id="services-title"
            style={{ position: "absolute", left: "-9999px" }}
          >
            Services
          </h2>

          <Grid>
            <Card>
              <CardIcon aria-hidden>
                <FiMonitor />
              </CardIcon>
              <CardTitle>{t("pages.whatWeDo.cards.frontend.title")}</CardTitle>
              <CardText>{t("pages.whatWeDo.cards.frontend.desc")}</CardText>
            </Card>

            <Card>
              <CardIcon aria-hidden>
                <FiServer />
              </CardIcon>
              <CardTitle>{t("pages.whatWeDo.cards.backend.title")}</CardTitle>
              <CardText>{t("pages.whatWeDo.cards.backend.desc")}</CardText>
            </Card>

            <Card>
              <CardIcon aria-hidden>
                <FiGlobe />
              </CardIcon>
              <CardTitle>{t("pages.whatWeDo.cards.web.title")}</CardTitle>
              <CardText>{t("pages.whatWeDo.cards.web.desc")}</CardText>
            </Card>

            <Card>
              <CardIcon aria-hidden>
                <FiSmartphone />
              </CardIcon>
              <CardTitle>{t("pages.whatWeDo.cards.mobile.title")}</CardTitle>
              <CardText>{t("pages.whatWeDo.cards.mobile.desc")}</CardText>
            </Card>
          </Grid>
        </section>
      </Container>
    </PageWrap>
  );
}

export default ServicesPageComponents;
