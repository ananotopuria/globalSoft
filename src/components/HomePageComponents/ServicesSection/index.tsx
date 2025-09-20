import { useTranslation } from "react-i18next";
import { FiServer } from "react-icons/fi";
import { SlScreenDesktop } from "react-icons/sl";
import { SlScreenSmartphone } from "react-icons/sl";

import { LuFileCode2 } from "react-icons/lu";

import {
  Section,
  HeadingWrap,
  Grid,
  Item,
  IconBox,
  Title,
  Text,
  Div,
} from "./styles";

type ServiceItem = { title: string; body: string };

function ServicesSection() {
  const { t } = useTranslation();

  const raw = t("pages.home.services.items", { returnObjects: true });
  const services: ServiceItem[] = Array.isArray(raw)
    ? (raw as ServiceItem[])
    : [];

  const icons = [
    <SlScreenDesktop />,
    <FiServer />,
    <LuFileCode2 />,
    <SlScreenSmartphone />,
  ];

  return (
    <Section aria-labelledby="our-services">
      <HeadingWrap>
        <div className="rule" />
        <h2 id="our-services">{t("pages.home.services.title")}</h2>
      </HeadingWrap>

      <Grid>
        {services.map((item, i) => (
          <Item key={i}>
            <IconBox $variant={i % 2 === 0 ? "dark" : "accent"}>
              {icons[i % icons.length]}
            </IconBox>
            <Div>
              <Title>{item.title}</Title>
              <Text>{item.body}</Text>
            </Div>
          </Item>
        ))}
      </Grid>
    </Section>
  );
}

export default ServicesSection;
