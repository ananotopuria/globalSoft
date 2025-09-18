import styled from "styled-components";

export const HeaderBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  user-select: none;

  img {
    width: 16rem;
    height: auto;
    display: block;
  }
`;

export const MobileOnly = styled.div`
  display: flex;
  @media (min-width: 1080px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  all: unset;
  cursor: pointer;
  display: grid;
  gap: 6px;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  span {
    display: block;
    width: 28px;
    height: 2px;
    background: #333;
    border-radius: 2px;
  }
`;

/* backdrop */
export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 999;
`;

/* drawer wrapper */
export const Drawer = styled.nav`
  position: fixed;
  inset: 0 0 0 auto;
  width: min(80vw, 360px);
  transform: translateX(100%);
  transition: transform 220ms ease-in-out;
  z-index: 1000;

  &[data-open="true"] {
    transform: translateX(0%);
  }

  @media (min-width: 1080px) {
    display: none;
  }
`;

export const DrawerPanel = styled.div`
  height: 100%;
  background: #fff;
  box-shadow: -12px 0 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

export const CloseRow = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  button {
    all: unset;
    cursor: pointer;
    font-size: 2rem;
    line-height: 1;
    padding: 0.25rem 0.5rem;
  }
`;

export const DrawerList = styled.div`
  padding: 1rem 1.5rem;

  ul {
    display: grid;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    display: block;
    padding: 0.75rem 0;
    font-size: 1.6rem;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #efefef;

    &:hover {
      color: #fe3b1f;
    }

    &.active {
      color: #fe3b1f;
      font-weight: 600;
    }
  }
`;
