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

export const Title = styled.h1`
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.15;
  margin: 0 0 10px 0;
  text-align: center;
`;

export const Intro = styled.p`
  color: #4b5563;
  font-size: clamp(16px, 2.2vw, 18px);
  text-align: center;
  max-width: 760px;
  margin: 0 auto 24px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr;
  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const Card = styled.section`
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  transition: border-color 180ms ease, box-shadow 180ms ease;
  &:hover {
    border-color: #fe3b1f;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 12px;
`;

export const Field = styled.div`
  display: grid;
  gap: 6px;
  & > label {
    font-weight: 600;
  }
  & > input[type="checkbox"] {
    width: 16px;
    height: 16px;
  }
`;

export const Input = styled.input`
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 15px;
  &:focus {
    outline: none;
    border-color: #fe3b1f;
    box-shadow: 0 0 0 3px rgba(254, 59, 31, 0.12);
  }
`;

export const Textarea = styled.textarea`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 12px;
  font-size: 15px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #fe3b1f;
    box-shadow: 0 0 0 3px rgba(254, 59, 31, 0.12);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: #111827;
  color: #fff;
  border: 1px solid #111827;
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
  font-weight: 600;
  transition: background 160ms ease, transform 120ms ease, box-shadow 160ms ease;
  &:hover {
    background: #000;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Status = styled.div<{ "data-variant"?: string }>`
  min-height: 1.25rem;
  font-size: 14px;
  &[data-variant="success"] {
    color: #16a34a;
  }
  &[data-variant="error"] {
    color: #dc2626;
  }
`;

export const Note = styled.p`
  margin-top: 4px;
  font-size: 13px;
  color: #6b7280;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: start;
  gap: 10px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const IconBox = styled.div`
  font-size: 22px;
  color: #111827;
  line-height: 1;
  margin-top: 2px;
`;

export const Label = styled.div`
  font-weight: 700;
`;

export const Value = styled.div`
  color: #4b5563;
  font-size: 15px;
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const MapBox = styled.div`
  margin-top: 16px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  iframe {
    width: 100%;
    height: 240px;
    border: 0;
    display: block;
  }
`;

export const HiddenHoneypot = styled.div`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
