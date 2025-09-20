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
  font-family: "Zalando Sans SemiExpanded", sans-serif;
  font-weight: 700;
`;

export const Intro = styled.p`
  color: #4b5563;
  font-size: clamp(16px, 2.2vw, 18px);
`;

export const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  border-top: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
`;

export const Item = styled.article`
  display: grid;
  gap: 10px;
  padding: 20px;
  border-right: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;
export const Poster = styled.figure`
  margin: 0;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  background: #f8fafb;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 200ms ease;
    will-change: transform;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const PosterFallback = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: #9ca3af;
`;

export const Caption = styled.figcaption`
  display: grid;
  gap: 4px;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;

  a {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  a:hover {
    text-decoration: underline;
  }

  svg {
    font-size: 16px;
    transform: translateY(1px);
  }
`;

export const ProjectMeta = styled.p`
  margin: 0;
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
`;
