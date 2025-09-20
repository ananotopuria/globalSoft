import { useTranslation } from "react-i18next";
import { FiExternalLink } from "react-icons/fi";
import {
  PageWrap,
  Container,
  HeaderBlock,
  Title,
  Intro,
  Grid,
  Item,
  Poster,
  PosterFallback,
  Caption,
  ProjectTitle,
  ProjectMeta,
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
          <Intro>{t("pages.portfolio.intro")}</Intro>
        </HeaderBlock>

        <Grid>
          {projects.map((p) => (
            <Item key={p.key}>
              <Poster>
                {p.imgSrc ? (
                  <img
                    src={p.imgSrc}
                    alt={
                      p.imgAlt || t(`pages.portfolio.projects.${p.key}.title`)
                    }
                    loading="lazy"
                  />
                ) : (
                  <PosterFallback aria-label="Image placeholder">
                    —
                  </PosterFallback>
                )}
              </Poster>

              <Caption>
                <ProjectTitle>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer">
                      {t(`pages.portfolio.projects.${p.key}.title`)}
                      <FiExternalLink aria-hidden />
                    </a>
                  ) : (
                    t(`pages.portfolio.projects.${p.key}.title`)
                  )}
                </ProjectTitle>

                <ProjectMeta>
                  {t(`pages.portfolio.projects.${p.key}.desc`)}
                </ProjectMeta>
              </Caption>
            </Item>
          ))}
        </Grid>
      </Container>
    </PageWrap>
  );
}
