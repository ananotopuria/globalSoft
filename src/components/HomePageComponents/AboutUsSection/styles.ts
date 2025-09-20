import styled from "styled-components";

export const AboutSection = styled.section<{ $bg?: string }>`
  position: relative;
  min-height: 60svh;
  min-height: 60vh;
  display: grid;
  place-items: center;
  color: #fff;
  text-align: center;
  padding: 24px;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.55)),
    ${({ $bg }) =>
      $bg
        ? `url(${$bg})`
        : `radial-gradient(circle at 30% 30%, #1f2937, #111827)`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AboutInner = styled.div`
  max-width: 950px;
  margin: 0 auto;
`;

export const Headline = styled.h1`
  font-size: clamp(28px, 6vw, 56px);
  line-height: 1.1;
  letter-spacing: 0.2px;
  margin: 0 0 12px 0;
  font-family: "Zalando Sans SemiExpanded", sans-serif;
  font-weight: 700;
`;

export const Body = styled.p`
  font-size: clamp(15px, 2.2vw, 18px);
  color: #e5e7eb;
  line-height: 1.7;
  margin: 0 auto;
`;
