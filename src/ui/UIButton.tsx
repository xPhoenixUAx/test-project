import React from "react";
import clsx from "clsx";

interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "black";
  className?: string;
  sticker?: React.ReactNode;
}

export default function UIButton({
  children,
  variant = "primary",
  className = "",
  sticker,
  ...props
}: UIButtonProps) {
  return (
    <div className="relative inline-block w-full">
      <button
        className={clsx(
          "ui-btn px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-transform duration-200 active:scale-95 w-full",
          variant === "primary"
            ? "bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#e56f8c] text-white hover:brightness-110"
            : "bg-white text-[#181a2a] border border-[#7375ff] hover:bg-[#f3f4fa]",
          variant === "secondary" &&
            "bg-[#fff] text-[#181a2a] border border-[#7375ff] hover:bg-[#f3f4fa]",
          variant === "black" &&
            "bg-black text-white border border-transparent hover:bg-opacity-80",
          className
        )}
        {...props}
      >
        {children}
      </button>
      {sticker && (
        <span className="bg-[#ff4a77] absolute right-0 top-0 rounded-[50px] w-[60px] h-[60px] text-sm text-white/80 flex items-center justify-center font-bold select-none pointer-events-none">
          {sticker}
        </span>
      )}
    </div>
  );
}
