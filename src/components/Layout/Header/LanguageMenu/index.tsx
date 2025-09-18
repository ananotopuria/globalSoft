import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const langs = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ka", name: "ქართული", flag: "🇬🇪" },
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

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button onClick={() => setOpen((v) => !v)}>
        {langs.find((l) => l.code === current)?.flag} {current.toUpperCase()} ▾
      </button>

      {open && (
        <ul
          style={{
            position: "absolute",
            right: 0,
            marginTop: 8,
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: 8,
            listStyle: "none",
            padding: 6,
            minWidth: 160,
            boxShadow: "0 8px 18px rgba(0,0,0,.1)",
          }}
        >
          {langs.map((l) => (
            <li
              key={l.code}
              onClick={() => select(l.code as "en" | "ka")}
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                padding: "8px 12px",
                cursor: "pointer",
                fontWeight: current === l.code ? 700 : 500,
                background:
                  current === l.code ? "rgba(0,0,0,0.05)" : "transparent",
              }}
            >
              <span>{l.flag}</span>
              <span style={{ flex: 1 }}>{l.name}</span>
              {current === l.code && (
                <span style={{ color: "#16a34a" }}>✔</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
