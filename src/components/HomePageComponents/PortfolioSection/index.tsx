import { useTranslation } from "react-i18next";
import { FiArrowRight } from "react-icons/fi";
import {
  Wrap,
  Inner,
  Copy,
  Title,
  Description,
  Actions,
  ActionCard,
  ActionText,
  ActionIcon,
} from "./styles";

function PortfolioSection() {
  const { t } = useTranslation();

  const k = "pages.home.portfolioTeaser";

  return (
    <Wrap aria-labelledby="portfolio-teaser">
      <Inner>
        <Copy>
          <Title id="portfolio-teaser">{t(`${k}.title`)}</Title>
          <Description>{t(`${k}.body`)}</Description>
        </Copy>

        <Actions>
          <ActionCard as="a" href={t(`${k}.primary.href`)}>
            <ActionText>{t(`${k}.primary.label`)}</ActionText>
            <ActionIcon>
              <FiArrowRight />
            </ActionIcon>
          </ActionCard>

          <ActionCard as="a" href="/contact">
            <ActionText>{t(`${k}.secondary.label`)}</ActionText>
            <ActionIcon>
              <FiArrowRight />
            </ActionIcon>
          </ActionCard>
        </Actions>
      </Inner>
    </Wrap>
  );
}

export default PortfolioSection;
