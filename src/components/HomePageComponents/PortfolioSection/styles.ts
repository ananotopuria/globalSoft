import styled from "styled-components";

export const Wrap = styled.section`
  padding: 2rem 1rem;
`;

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: #000;
  border-radius: 24px;
  padding: clamp(1.25rem, 3vw, 2rem);
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  align-items: center;

  @media (min-width: 980px) {
    grid-template-columns: 2fr 1.2fr;
  }
`;

export const Copy = styled.div``;

export const Title = styled.h2`
  font-size: clamp(1.6rem, 3.2vw, 2.6rem);
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: #f3f3f3;
  margin: 0 0 0.6rem 0;
`;

export const Description = styled.p`
  margin: 0;
  color: #ccc;
  line-height: 1.7;
  font-size: clamp(0.98rem, 1.6vw, 1.08rem);
  max-width: 50rem;
`;

export const Actions = styled.div`
  display: grid;
  gap: 0.9rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionCard = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.1rem;
  background-color: #f36b2a;
  border-radius: 16px;
  text-decoration: none;
  color: #fff;
  transition: background-color 1s ease;

  &:hover {
    background-color: #ccc;
    color: #000;
  }
`;

export const ActionText = styled.span`
  font-size: clamp(0.98rem, 1.6vw, 1.05rem);
  font-weight: 600;
`;

export const ActionIcon = styled.span`
  display: inline-grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.08);

  svg {
    width: 20px;
    height: 20px;
  }
`;
