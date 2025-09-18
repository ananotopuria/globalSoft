import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, Flag, Item, List, Name, Toggle, Wrapper } from "./styles";

const langs = [
  { code: "en" as const, name: "English", flag: "🇬🇧" },
  { code: "ka" as const, name: "ქართული", flag: "🇬🇪" },
];

export default function LanguageMenu() {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith("ka") ? "ka" : "en";
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const select = (lng: "en" | "ka") => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Wrapper ref={ref}>
      <Toggle
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{langs.find((l) => l.code === current)?.flag}</span>
        {current.toUpperCase()} ▾
      </Toggle>

      {open && (
        <List role="menu" aria-label="Language selector">
          {langs.map((l) => (
            <Item
              key={l.code}
              role="menuitemradio"
              aria-checked={current === l.code}
              onClick={() => select(l.code)}
              $active={current === l.code}
            >
              <Flag>{l.flag}</Flag>
              <Name>{l.name}</Name>
              {current === l.code && <Check>&bull;</Check>}
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
}
