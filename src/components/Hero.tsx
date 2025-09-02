import React from "react";
import Image from "next/image";
import heroImageMob from "../../public/hero-mob.jpg";
import heroImageDesk from "../../public/hero-desk.jpg";
import UIButton from "@/ui/UIButtonWithModal";

export default function Hero() {
  return (
    <section className="container-mobile container-desktop pt-8 pb-12">
      <div className="hidden lg:grid grid-cols-[644px_1fr] grid-rows-[auto_auto] gap-x-12 items-center relative">
        <div className="row-span-2 col-span-1 flex flex-col items-end relative">
          <Image
            src={heroImageDesk}
            alt="Hero"
            className="rounded-[18px] w-[644px] h-[466px] object-cover mb-5"
            width={644}
            height={466}
            priority
          />
          <div className=" flex flex-col items-center lg:self-start lg:ml-4 lg:-mt-[5px] z5">
            <UIButton
              variant="secondary"
              sticker={
                <span className="flex font-family line-height-[128%] items-center justify-center font-bold leading-none">
                  <span className="text-[20px]">-5</span>
                  <span className="relative top-[-2px] text-[20px]">0%</span>
                </span>
              }
              className="w-full mt-2 lg:px-40 py-6"
            >
              Купить со скидкой
            </UIButton>
            <div className="flex justify-center gap-[10px] items-center pt-[11px]">
              <p className="text-[#ff4a77] text-[20px] font-family font-bold">
                1000 грн
              </p>
              <p className="line-through text-[14px]">2000 грн</p>
            </div>
          </div>
        </div>
        <p className="col-start-2 row-start-1 text-[18px] text-white/80 mb-2 mt-15 max-w-md order-1">
          Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
          ключ к созданию вирусного контента и превратите свои идеи в миллионные
          просмотры.
        </p>
        <div className="col-start-2 row-start-2 flex flex-col -ml-32 z-5 max-w-xl order-2">
          <p className="text-[32px] font-bold font-family leading-tight gradient-text mb-2">
            От 0 до 100,000 за 90 дней
          </p>
          <h1 className="text-[96px] color-white font-family font-bold mb-4 uppercase leading-none">
            Секреты Вирусных Видео
          </h1>
        </div>
      </div>
      {/* Mobile flex */}
      <div className="flex flex-col items-center text-center lg:hidden">
        <Image
          src={heroImageMob}
          alt="Hero"
          className="w-full max-w-xs rounded-[18px] -mb-20"
          width={500}
          height={500}
          priority
        />
        <p className="text-2xl font-bold font-family leading-tight gradient-text mb-2">
          От 0 до 100,000 за 90 дней
        </p>
        <h1 className="text-[51px] color-white font-family font-bold mb-4 uppercase">
          Секреты Вирусных Видео
        </h1>
        <p className="text-[14px] text-white/80 mb-6 max-w-md">
          Станьте известным всего за 3 месяца без затрат на рекламу! Узнайте
          ключ к созданию вирусного контента и превратите свои идеи в миллионные
          просмотры.
        </p>
        <div className="relative w-full">
          <UIButton
            variant="secondary"
            sticker={
              <span className="flex font-family line-height-[128%] items-center justify-center font-bold leading-none w-[70px] h-[70px]">
                <span className="text-[20px]">-5</span>
                <span className="relative top-[-2px] text-[20px]">0%</span>
              </span>
            }
            className="w-full h-[70px] lg:w-[340px]"
          >
            Купить со скидкой
          </UIButton>
          <div className="flex justify-center gap-[10px] items-center pt-[11px]">
            <p className="text-[#ff4a77] text-[20px] font-family font-bold">
              1000 грн
            </p>
            <p className="line-through text-[14px]">2000 грн</p>
          </div>
        </div>
      </div>
    </section>
  );
}
