import React from "react";
import clsx from "clsx";

export type UICardVariant = "default" | "gradient" | "bordered";

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
        "ui-card p-6 rounded-2xl shadow-md transition-all",
        variant === "default" && "bg-white text-[#181a2a]",
        variant === "gradient" &&
          "bg-gradient-to-br from-[#5bdbfd] via-[#7375ff] to-[#e56f8c] text-white",
        variant === "bordered" &&
          "bg-white border-2 border-[#7375ff] text-[#181a2a]",
        className
      )}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {description && (
        <p className="mb-4 text-base opacity-80">{description}</p>
      )}
      {children}
    </div>
  );
}
