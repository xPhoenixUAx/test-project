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
  titleClassName?: string;
  titleAddon?: React.ReactNode;
}

export default function UICard({
  title,
  description,
  children,
  variant = "default",
  className = "",
  titleClassName = "",
  titleAddon,
}: UICardProps) {
  return (
    <div
      className={clsx(
        "ui-card p-8 rounded-2xl shadow-md transition-all",
        variant === "default" &&
          "uicard-default-bg uicard-default-shadow text-[#181a2a]",
        variant === "gradient" &&
          "bg-gradient-to-br from-[#5bdbfd] via-[#7375ff] to-[#773ef2] text-white",
        variant === "whitecard" && "uicard-white",
        variant === "blackcard" &&
          "bg-gradient-to-br from-[#5bdbfd] via-[#7375ff] to-[#6d32ec] shadow-[inset_4px_6px_10px_4px_rgba(167,93,243,0.2)] text-white",
        className
      )}
    >
      <h3
        className={clsx(
          "text-[16px] uppercase font-bold pb-[32px] flex items-center justify-between",
          titleClassName
        )}
      >
        {title}
        {titleAddon && <span>{titleAddon}</span>}
      </h3>
      {description && (
        <p className="mb-4 text-base opacity-80">{description}</p>
      )}
      {children}
    </div>
  );
}
