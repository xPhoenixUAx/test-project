import React from "react";
import Image from "next/image";
import heroImageMob from "../../public/hero-mob.jpg";
import heroImageDesk from "../../public/hero-desk.jpg";
import UIButton from "@/ui/UIButton";
export default function Hero() {
  return (
    <section className="container-mobile container-desktop flex flex-col items-center text-center pt-8 pb-12">
      <Image
        src={heroImageMob}
        alt="Hero"
        className="w-full max-w-xs rounded-[18px] lg:hidden"
        width={500}
        height={500}
        priority
      />
      <Image
        src={heroImageDesk}
        alt="Hero"
        className="hidden lg:block rounded-[18px]"
        width={644}
        height={466}
        priority
      />
      <div className="-mt-20 md:-mt-24 flex flex-col items-center ">
        <p className="text-2xl lg:text-[32px] font-bold font-family lg:text-base leading-tight gradient-text mb-2">
          От 0 до 100,000 за 90 дней
        </p>
        <h1 className="text-[51px] lg:text-[96px] color-white font-family lg:text-5xl font-bold mb-4 uppercase">
          Секреты Вирусных Видео
        </h1>
        <p className="text-[14px] lg:text-[18px] text-white/80 mb-6 max-w-md">
          Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
          ключ к созданию вирусного контента и превратите свои идеи в миллионные
          просмотры.
        </p>
        <div className="relative w-full">
          <UIButton
            variant="secondary"
            sticker={
              <span className="flex font-family line-height-[128%] items-center justify-center  font-bold leading-none w-[70px] h-[70px]">
                <span className="text-[20px]">-5</span>
                <span className="relative top-[-2px] text-[20px]">0%</span>
              </span>
            }
            className="w-full py-[19px]  lg:w-[534px]"
          >
            Купить со скидкой
          </UIButton>
          <div className="flex justify-center gap-[10px] items-center pt-[11px]">
            <p className="text-[#ff4a77] text-[20px] font-family font-bold">
              1000 грн
            </p>
            <p className="line-through text-[14px">2000 грн</p>
          </div>
        </div>
      </div>
    </section>
  );
}
