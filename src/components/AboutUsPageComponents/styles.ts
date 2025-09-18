import styled from "styled-components";

export const PageWrap = styled.main`
  padding: 48px 16px;
  @media (min-width: 768px) {
    padding: 72px 24px;
  }
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const HeaderBlock = styled.header`
  max-width: 900px;
  margin: 0 auto 40px auto;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 56px;
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
  margin: 0 0 16px 0;
  font-weight: 600;
`;

export const Lead = styled.p`
  font-size: clamp(16px, 2.2vw, 18px);
  color: #4b5563;
  line-height: 1.7;
`;

export const ValuesGrid = styled.div`
  margin-top: 12px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 640px) {
    gap: 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ValueCard = styled.article`
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 18px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: transform 180ms ease, box-shadow 180ms ease,
    border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #fe3b1f;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
  }

  &:focus-visible {
    outline: none;
    border-color: #fe3b1f;
    box-shadow: 0 0 0 3px rgba(254, 59, 31, 0.15);
  }
`;

export const ValueIcon = styled.div`
  font-size: 28px;
  line-height: 1;
  color: #111827;
  margin-bottom: 10px;
`;

export const ValueTitle = styled.h3`
  font-size: 18px;
  margin: 0 0 6px 0;
`;

export const ValueText = styled.p`
  font-size: 15px;
  color: #4b5563;
  line-height: 1.6;
`;
