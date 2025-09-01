import React from "react";

import UIButton from "@/ui/UIButton";

export default function HowTo() {
  return (
    <section className="container-mobile py-[110px] px-[54px] section-border flex flex-col items-center text-center bg-custom-gradient mb-[48px]">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Узнай, как создавать контент, который{" "}
        <span className="bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#e56f8c] bg-clip-text text-transparent">
          покоряет аудитории
        </span>
      </h2>
      <p className="text-base md:text-lg text-white/80 mb-6 max-w-xl">
        Материалы, способные стать вирусными и охватить тысячи людей!
      </p>
      <UIButton
        sticker={
          <span className="flex font-family line-height-[128%] items-center justify-center w-[75px] h-[75px] font-bold leading-none">
            <span className="text-[20px]">-5</span>
            <span className="relative top-[-2px] text-[20px]">0%</span>
          </span>
        }
        className="w-full pl-[49px] pr-[96px] pt-[24px] pb-[24px]"
      >
        Купить со скидкой
      </UIButton>
    </section>
  );
}
