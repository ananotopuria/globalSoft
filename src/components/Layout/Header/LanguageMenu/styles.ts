import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  cursor: pointer;
  line-height: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  &:hover {
    background: #f9fafb;
  }

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const List = styled.ul`
  position: absolute;
  right: 0;
  margin-top: 8px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  list-style: none;
  padding: 6px;
  min-width: 180px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  z-index: 20;
`;

export const Item = styled.li<{ $active?: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  background: ${({ $active }) =>
    $active ? "rgba(0,0,0,0.05)" : "transparent"};

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;

export const Flag = styled.span`
  font-size: 18px;
  line-height: 1;
`;

export const Name = styled.span`
  flex: 1;
`;

export const Check = styled.span`
  color: #fe3b1f;
`;
