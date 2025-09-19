import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import {
  PageWrap,
  Container,
  HeaderBlock,
  Title,
  Subtitle,
  Intro,
  Grid,
  Card,
  Poster,
  PosterFallback,
  CardBody,
  CardTitle,
  CardText,
  Actions,
  VisitLink,
} from "./styles";

type Project = {
  key: "globalcellMe" | "globalcellGe" | "globalcellBusiness";
  href?: string;
  imgSrc?: string;
  imgAlt?: string;
};

const projects: Project[] = [
  {
    key: "globalcellMe",
    href: "https://globalcell.me",
    imgSrc: "/assets/me.png",
    imgAlt: "GlobalCell Me dashboard preview",
  },
  {
    key: "globalcellGe",
    href: "https://globalcell.ge",
    imgSrc: "/assets/mobi.png",
    imgAlt: "GlobalCell.ge website preview",
  },
  {
    key: "globalcellBusiness",
    href: "https://globalcell.business",
    imgSrc: "/assets/business.png",
    imgAlt: "GlobalCell Business portal preview",
  },
];

export default function PortfolioPageComponents() {
  const { t } = useTranslation();

  return (
    <PageWrap>
      <Container>
        <HeaderBlock>
          <Title>{t("pages.portfolio.title")}</Title>
          <Subtitle>{t("pages.portfolio.subtitle")}</Subtitle>
          <Intro>{t("pages.portfolio.intro")}</Intro>
        </HeaderBlock>

        <Grid>
          {projects.map((p) => (
            <Card key={p.key}>
              {p.imgSrc ? (
                <Poster>
                  <img
                    src={p.imgSrc}
                    alt={
                      p.imgAlt || t(`pages.portfolio.projects.${p.key}.title`)
                    }
                  />
                </Poster>
              ) : (
                <PosterFallback aria-label="Image placeholder">
                  infophoto
                </PosterFallback>
              )}

              <CardBody>
                <CardTitle>
                  {t(`pages.portfolio.projects.${p.key}.title`)}
                </CardTitle>
                <CardText>
                  {t(`pages.portfolio.projects.${p.key}.desc`)}
                </CardText>

                <Actions>
                  {p.href && (
                    <VisitLink href={p.href} target="_blank" rel="noreferrer">
                      {t("pages.portfolio.visit")}{" "}
                      <FiExternalLink aria-hidden />
                    </VisitLink>
                  )}
                </Actions>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </PageWrap>
  );
}
