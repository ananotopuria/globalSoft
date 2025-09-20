import styled from "styled-components";

export type IconVariant = "dark" | "accent";

export const Section = styled.section`
  padding: 6rem 1.5rem;
  text-align: center;
`;

export const HeadingWrap = styled.div`
  margin-bottom: 3rem;
  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    letter-spacing: 0.06em;
    font-weight: 800;
  }
  .rule {
    width: 70px;
    height: 2px;
    background: #f36b2a;
    margin: 0.75rem auto 1rem;
  }
`;

export const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr;
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Item = styled.article`
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 480px) {
    grid-template-columns: 68px 1fr;
  }
`;

type IconBoxProps = { $variant?: IconVariant };

export const IconBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "$variant",
})<IconBoxProps>`
  width: 88px;
  height: 88px;
  display: grid;
  place-items: center;
  border-radius: 4px;
  background: ${({ $variant }) => ($variant === "dark" ? "#111" : "#f36b2a")};
  color: #fff;
  transition: transform 0.2s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);

  svg {
    width: 36px;
    height: 36px;
    stroke-width: 1.6;
  }

  @media (max-width: 480px) {
    width: 68px;
    height: 68px;
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Title = styled.h3`
  margin: 0 0 0.4rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #f36b2a;
`;

export const Text = styled.p`
  margin: 0;
  color: #555;
  line-height: 1.6;
  font-size: 1.2rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
