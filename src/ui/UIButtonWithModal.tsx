"use client";
import React from "react";
import UIButton from "@/ui/UIButton";
import { useModal } from "@/providers/ModalProvider";

type LocalButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "blackbutton";
  sticker?: React.ReactNode;
  className?: string;
};

export default function UIButtonWithModal({
  onClick,
  children,
  variant,
  className,
  sticker,
  ...rest
}: LocalButtonProps) {
  const modal = useModal();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e);
    modal.open();
  }

  return (
    <UIButton
      variant={variant}
      className={className}
      sticker={sticker}
      onClick={handleClick}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </UIButton>
  );
}
