import styled from "styled-components";

export const PageWrap = styled.main`
  padding: 48px 16px;
  @media (min-width: 768px) {
    padding: 72px 24px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeaderBlock = styled.header`
  max-width: 900px;
  margin: 0 auto 32px auto;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 48px;
  }
`;

export const Title = styled.h1`
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.15;
  margin: 0 0 16px 0;
  font-family: "Zalando Sans SemiExpanded", sans-serif;
  font-weight: 700;
`;

export const Intro = styled.p`
  color: #4b5563;
  font-size: clamp(16px, 2.2vw, 18px);
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 640px) {
    gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    gap: 24px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Card = styled.article`
  background: #ffffff;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: box-shadow 180ms ease, border-color 180ms ease;
  cursor: default;

  &:hover {
    border-color: #fe3b1f;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
  }
`;

export const CardIcon = styled.div`
  font-size: 28px;
  line-height: 1;
  margin-bottom: 10px;
  color: #111827;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
`;

export const CardText = styled.p`
  color: #4b5563;
  font-size: 15px;
  line-height: 1.6;
`;
