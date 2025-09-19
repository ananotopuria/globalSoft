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
  margin: 0 0 10px 0;
`;

export const Subtitle = styled.h2`
  font-size: clamp(18px, 2.4vw, 22px);
  color: #6b7280;
  margin: 0 0 14px 0;
  font-weight: 600;
`;

export const Intro = styled.p`
  color: #4b5563;
  font-size: clamp(16px, 2.2vw, 18px);
`;

export const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
`;

export const Card = styled.article`
  background: #fff;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 180ms ease, box-shadow 180ms ease,
    border-color 180ms ease;

  &:hover {
    border-color: #fe3b1f;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
  }
`;

export const Poster = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #f8fafc;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const PosterFallback = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  color: #6b7280;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
`;

export const CardText = styled.p`
  font-size: 15px;
  color: #4b5563;
  line-height: 1.6;
`;

export const Actions = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const VisitLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  border-radius: 10px;
  background: #111827;
  color: #fff;
  border: 1px solid #111827;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: background 160ms ease, box-shadow 160ms ease, transform 120ms ease;

  &:hover {
    background: #000;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
`;
