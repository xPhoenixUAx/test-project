"use client";
import React, { createContext, useContext, useState } from "react";
import UIModal from "@/ui/UIModal";

type ModalContextValue = {
  open: () => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const ctx: ModalContextValue = {
    open: () => setOpen(true),
    close: () => setOpen(false),
  };

  return (
    <ModalContext.Provider value={ctx}>
      {children}
      <UIModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSubmit={(data) => console.log("modal submit:", data)}
        title="Укажите свои данные"
      />
    </ModalContext.Provider>
  );
}
