"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import menuIcon from "../../public/iconamoon_menu-burger-horizontal.svg";
import UIButton from "@/ui/UIButtonWithModal";

const LANGS = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "ua", label: "UA" },
];

function LangSelect({
  lang,
  setLang,
  className = "",
}: {
  lang: string;
  setLang: (code: string) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        className="flex items-center gap-1 px-2 py-1 text-sm font-semibold text-white hover:bg-white/20 transition-colors select-none"
        onClick={() => setOpen((v) => !v)}
      >
        {LANGS.find((l) => l.code === lang)?.label}
        <svg
          className={`w-4 h-4 ml-1 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul
        className={`absolute right-0 mt-1 w-16 rounded bg-[#22223b] shadow-lg overflow-hidden transition-all duration-200 z-30 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {LANGS.map((l) => (
          <li
            key={l.code}
            className={`px-3 py-2 text-sm cursor-pointer hover:bg-[#393a5a] text-white transition-colors ${
              lang === l.code ? "font-bold" : ""
            }`}
            onClick={() => {
              setLang(l.code);
              setOpen(false);
            }}
          >
            {l.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("ru");

  useEffect(() => {
    const handler = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="w-full container-mobile container-desktop pt-[51px] flex items-center bg-transparent relative z-20 justify-center">
      <div className="flex items-center flex-none">
        <Link href="/" className="third-family text-lg uppercase font-bold">
          Aleko <span className="gradient-text">Sokurashvili</span>
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-[28px] mx-auto">
        <Link href="/structure" className="text-sm font-medium">
          Структура
        </Link>
        <Link href="/about" className="text-sm font-medium">
          Обо мне
        </Link>
        <Link href="/Benefits" className="text-sm font-medium">
          Плюсы
        </Link>
        <Link href="/Reviews" className="text-sm font-medium">
          Отзывы
        </Link>
        <Link href="/FAQ" className="text-sm font-medium">
          FAQ
        </Link>
      </nav>
      <div className="hidden lg:flex items-center gap-4 flex-none">
        <LangSelect lang={lang} setLang={setLang} />
        <UIButton
          variant="primary"
          className="ml-4 max-w-[190px] max-h-[40px] text-[12px]"
        >
          Купить со скидкой
        </UIButton>
      </div>

      {/* Мобільні кнопки */}
      <div className="flex items-center gap-3 lg:hidden">
        <LangSelect lang={lang} setLang={setLang} />
        <button
          className="flex justify-center items-center w-8 h-8 z-20"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <Image src={menuIcon} alt="Menu" width={35} height={35} />
        </button>
      </div>

      {/* Мобільне меню */}
      <nav
        className={`fixed top-0 right-0 h-[50%] w-full max-w-lg bg-black/10 backdrop-blur-lg shadow-lg z-10 flex flex-col items-start pt-20 px-6 gap-6 transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {["Структура", "Обо мне", "Плюсы", "Отзывы", "FAQ"].map((item) => (
          <Link
            key={item}
            href={`/${item}`}
            className="text-lg font-medium text-white"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-0 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
