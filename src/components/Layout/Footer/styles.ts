import styled from "styled-components";

export const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const FooterCol = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 0.6rem;
  }

  a {
    color: #bbb;
    text-decoration: none;
    font-size: 1.4rem;
    line-height: 1.6;
    transition: color 0.2s ease;

    &:hover {
      color: #fe3b1f;
    }
  }
`;

export const FooterTitle = styled.h4`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #fff;
`;

export const FooterText = styled.p`
  margin: 0.25rem 0;
  font-size: 1.4rem;
  line-height: 1.6;
  color: #ccc;
`;

export const FooterBottom = styled.div`
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid #333;
  font-size: 1.2rem;
  text-align: center;
  color: #888;
`;

export const FooterWrapper = styled.footer`
  background: linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%);
  background: #111;
  color: #eee;
  padding: 4rem 2rem 2rem;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);

  background-size: 40px 40px;

  color: #eee;
  padding: 4rem 2rem 2rem;
  position: relative;
  z-index: 1;
`;
