import React from "react";
import clsx from "clsx";

interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "blackbutton";
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
    <div className="relative inline-block w-full lg:inline-block lg:w-auto">
      <button
        className={clsx(
          "ui-btn relative px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-transform duration-200 active:scale-95 w-full",
          variant === "primary" &&
            "bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#e56f8c] text-white hover:brightness-110",
          variant === "secondary" &&
            "bg-[#fff] text-[#181a2a] border border-[#7375ff] hover:bg-[#f3f4fa]",
          variant === "blackbutton" &&
            "bg-black text-white border border-transparent hover:bg-opacity-80",
          sticker && "pr-[92px]",
          className
        )}
        {...props}
      >
        <span className="w-full flex items-center justify-between">
          <span className="flex-1 text-left">{children}</span>
        </span>
        {sticker && (
          <span className="absolute top-1/2 right-[-2] -translate-y-1/2 w-[75px] h-[75px] bg-[#ff4a77] rounded-full flex items-center justify-center font-bold text-white select-none pointer-events-none shadow-md">
            {sticker}
          </span>
        )}
      </button>
    </div>
  );
}
