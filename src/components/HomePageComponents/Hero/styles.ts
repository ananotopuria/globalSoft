import styled from "styled-components";

export const HeroSection = styled.section<{ $bg?: string }>`
  position: relative;
  min-height: 100svh;
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: #fff;
  text-align: center;
  padding: 24px;

  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    ${({ $bg }) =>
      $bg
        ? `url(${$bg})`
        : `radial-gradient(circle at 30% 30%, #1f2937, #111827)`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroInner = styled.div`
  max-width: 950px;
  margin: 0 auto;
`;

export const Headline = styled.h1`
  font-size: clamp(28px, 6vw, 56px);
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: 0.2px;
  margin: 0 0 12px 0;
`;

export const Body = styled.p`
  font-size: clamp(15px, 2.2vw, 18px);
  color: #e5e7eb;
  line-height: 1.7;
  margin: 0 auto;
`;

export const Actions = styled.div`
  margin-top: 22px;
  display: inline-flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
`;

const BtnBase = styled.button`
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 120ms ease, box-shadow 160ms ease, background 160ms ease,
    color 160ms ease;
  will-change: transform;
  &:focus-visible {
    outline: 2px solid #f97316;
    outline-offset: 3px;
  }
`;

export const PrimaryBtn = styled(BtnBase)`
  background: #fe3b1f;
  border: 1px solid #fe3b1f;
  color: #fff;
  &:hover {
    background: #ef2f13;
    border: 1px solid #fff;
  }
`;

export const SecondaryBtn = styled(BtnBase)`
  background: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;
