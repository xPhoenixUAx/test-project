import React from "react";

import UIButton from "@/ui/UIButton";

export default function HowTo() {
  return (
    <section className="relative overflow-hidden container-mobile container-desktop py-[110px] px-[54px] section-border flex flex-col items-center text-center bg-custom-gradient mb-[48px]">
      <div className="hidden z-0 lg:block bottom-line pointer-events-none select-none absolute lg:z-20 ">
        <span className="uppercase" style={{ filter: "blur(2px)" }}>
          Секреты вирусных видео
        </span>
      </div>
      <div className="bottom-line-left z-10">
        <span className="left uppercase text-[16px]">
          {"Секреты вирусных видео ".repeat(2)}
        </span>
      </div>
      <div
        className="hidden lg:block pointer-events-none select-none absolute left-0 top-0 h-full w-[220px] z-0"
        style={{
          backgroundImage: "url('/how-to-left.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-[534px] flex flex-col items-center lg: lg:ml-4 lg:-mt-[15px] z-10">
          <h2 className="text-2xl lg:text-[36px] font-bold mb-4 w-[447px]">
            Узнай, как создавать контент, который{" "}
            <span className="bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#e56f8c] bg-clip-text text-transparent">
              покоряет аудитории
            </span>
          </h2>

          <p className="text-base lg:text-[24px] text-white/80 mb-6 max-w-xl leading-tight text-center">
            <span className="block mb-1">Материалы, способные стать</span>
            <span className="block mb-3">
              вирусными и охватить тысячи людей!
            </span>
          </p>
        </div>
        <UIButton
          sticker={
            <span className="flex font-family line-height-[128%] items-center justify-center w-[75px] h-[75px] font-bold leading-none">
              <span className="text-[20px]">-5</span>
              <span className="relative top-[-2px] text-[20px]">0%</span>
            </span>
          }
          className="mx-auto max-w-100 py-6 px-20"
        >
          Купить со скидкой
        </UIButton>
      </div>
    </section>
  );
}
