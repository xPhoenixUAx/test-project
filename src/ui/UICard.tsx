import "@/ui/uicard-custom.css";
import React from "react";
import clsx from "clsx";

export type UICardVariant = "default" | "gradient" | "whitecard" | "blackcard";

interface UICardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  variant?: UICardVariant;
  className?: string;
}

export default function UICard({
  title,
  description,
  children,
  variant = "default",
  className = "",
}: UICardProps) {
  return (
    <div
      className={clsx(
        "ui-card p-8 rounded-2xl shadow-md transition-all",
        variant === "default" &&
          "uicard-default-bg uicard-default-shadow text-[#181a2a]",
        variant === "gradient" &&
          "bg-gradient-to-br from-[#5bdbfd] via-[#7375ff] to-[#e56f8c] text-white",
        variant === "whitecard" && "uicard-white",
        variant === "blackcard" && "bg-black text-white",
        className
      )}
    >
      <h3 className="text-[16px] uppercase font-bold pb-[32px]">{title}</h3>
      {description && (
        <p className="mb-4 text-base opacity-80">{description}</p>
      )}
      {children}
    </div>
  );
}
