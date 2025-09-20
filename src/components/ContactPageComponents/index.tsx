import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import {
  Actions,
  Button,
  Container,
  Field,
  Form,
  Grid,
  HiddenHoneypot,
  IconBox,
  InfoList,
  InfoRow,
  Input,
  Intro,
  Label,
  MapStrip,
  Note,
  PageWrap,
  Status,
  Textarea,
  Title,
  Value,
} from "./styles";

type StatusType = "idle" | "loading" | "success" | "error";

export default function ContactPageComponents() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<StatusType>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("company_website")) {
      return;
    }

    try {
      setStatus("loading");
      await new Promise((r) => setTimeout(r, 800));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <PageWrap>
      <Container>
        <Title>{t("pages.contact.title")}</Title>
        <Intro>{t("pages.contact.intro")}</Intro>

        <Grid>
          <section aria-labelledby="contact-form">
            <h2 id="contact-form" style={{ position: "absolute", left: -9999 }}>
              Form
            </h2>

            <Form onSubmit={onSubmit} noValidate>
              <HiddenHoneypot>
                <label>
                  Do not fill this field
                  <input
                    name="company_website"
                    type="text"
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </label>
              </HiddenHoneypot>

              <Field>
                <label htmlFor="name">{t("pages.contact.form.name")}</label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder={t("pages.contact.form.name_ph")!}
                />
              </Field>

              <Field>
                <label htmlFor="email">{t("pages.contact.form.email")}</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                />
              </Field>

              <Field>
                <label htmlFor="phone">{t("pages.contact.form.phone")}</label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+995 5xx xx xx xx"
                />
              </Field>

              <Field>
                <label htmlFor="subject">
                  {t("pages.contact.form.subject")}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t("pages.contact.form.subject_ph")!}
                />
              </Field>

              <Field>
                <label htmlFor="message">
                  {t("pages.contact.form.message")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t("pages.contact.form.message_ph")!}
                />
              </Field>

              <Field style={{ alignItems: "center" }}>
                <input id="consent" name="consent" type="checkbox" required />
                <label htmlFor="consent">
                  {t("pages.contact.form.consent")}{" "}
                  <a href="/privacy" target="_self" rel="noreferrer">
                    {t("pages.contact.form.privacy")}
                  </a>
                </label>
              </Field>

              <Actions>
                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading"
                    ? t("pages.contact.sending")
                    : t("pages.contact.send")}
                </Button>

                <Status role="status" aria-live="polite" data-variant={status}>
                  {status === "success" && t("pages.contact.success")}
                  {status === "error" && t("pages.contact.error")}
                </Status>
              </Actions>

              <Note>{t("pages.contact.note")}</Note>
            </Form>
          </section>

          {/* INFO */}
          <section aria-labelledby="contact-info">
            <h2 id="contact-info" style={{ position: "absolute", left: -9999 }}>
              Info
            </h2>

            <InfoList>
              <InfoRow>
                <IconBox>
                  <FiMail />
                </IconBox>
                <div>
                  <Label>{t("pages.contact.info.email")}</Label>
                  <Value>
                    <a href="mailto:info@globalsoft.ge">info@globalsoft.ge</a>
                  </Value>
                </div>
              </InfoRow>

              <InfoRow>
                <IconBox>
                  <FiPhone />
                </IconBox>
                <div>
                  <Label>{t("pages.contact.info.phone")}</Label>
                  <Value>
                    <a href="tel:+995322033034">032 2 033 034</a>
                  </Value>
                </div>
              </InfoRow>

              <InfoRow>
                <IconBox>
                  <FiMapPin />
                </IconBox>
                <div>
                  <Label>{t("pages.contact.info.address")}</Label>
                  <Value>Mari Broses #2, Georgia</Value>
                </div>
              </InfoRow>

              <InfoRow>
                <IconBox>
                  <FiClock />
                </IconBox>
                <div>
                  <Label>{t("pages.contact.info.hours")}</Label>
                  <Value>{t("pages.contact.info.hours_value")}</Value>
                </div>
              </InfoRow>
            </InfoList>
          </section>
        </Grid>
      </Container>

      <MapStrip aria-label="Map">
        <iframe
          title="GlobalSoft office location"
          src="https://maps.google.com/maps?q=Mari%20Broses%202%20Georgia&z=14&output=embed"
          loading="lazy"
        />
      </MapStrip>
    </PageWrap>
  );
}
