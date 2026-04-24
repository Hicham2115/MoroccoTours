"use client";

import { createContext, useContext, useState } from "react";

const LangContext = createContext({ lang: "EN", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState("EN");
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
