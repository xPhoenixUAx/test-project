import "./tariffs-custom.css";
import React from "react";
import UICard, { UICardVariant } from "@/ui/UICard";
import UIButton from "@/ui/UIButton";
import "./tariffs-features-list.css";

interface Tariff {
  title: string;
  price: string;
  oldPrice: string;
  features: (string | React.ReactNode)[];
  variant?: UICardVariant;
  buttonText?: string;
  sticker?: React.ReactNode;
  stickerSeller?: React.ReactNode;
  buttonVariant?: "primary" | "secondary" | "blackbutton";
  titleAddon?: React.ReactNode;
}

const tariffs: Tariff[] = [
  {
    title: "Базовый",
    price: "99 $",
    oldPrice: "139$",
    features: [
      "Базовий курс",
      <span key="lessons" className="flex items-baseline">
        3<span className="relative -top-[2px]">8 уроков</span>
      </span>,
    ],
    variant: "default",
    buttonText: "Купить",
    buttonVariant: "secondary",
  },
  {
    title: "Продвинутий",
    price: "149 $",
    oldPrice: "199$",
    features: [
      "база",
      "дополнительные уроки",
      <span key="lessons" className="flex items-baseline">
        4<span className="relative -top-[2px]">8 уроков</span>
      </span>,
      "чат-комьюнити для создателей контента",
    ],
    variant: "whitecard",
    buttonText: "Купить",
    buttonVariant: "blackbutton",
    stickerSeller: (
      <div
        style={{
          borderRadius: "18px",
          width: "169px",
          height: "42px",
          background:
            "linear-gradient(225deg, #5bdbfd 0%, #7375ff 50%, #946fe5 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: "18px",
          position: "absolute",
          top: "-21px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          boxShadow: "0 2px 8px 0 rgba(115,117,255,0.15)",
        }}
      >
        Best seller
      </div>
    ),
    titleAddon: "PRO",
  },
  {
    title: "ЭКСПЕРТ",
    price: "299 $",
    oldPrice: "500$",
    features: [
      "дополнительные уроки",
      <span key="lessons" className="flex items-baseline">
        4<span className="relative -top-[2px]">8 уроков</span>
      </span>,
      ,
      "чат-комьюнити для создателей контента",
      "Разбор вашей страницы в формате видеозвонка",
    ],
    variant: "gradient",
    buttonText: "Купить",
    buttonVariant: "blackbutton",
    titleAddon: "EXPERT",
  },
];

export default function Tariffs() {
  return (
    <section className="container-mobile py-10 grid gap-6 md:grid-cols-3">
      <h2 className="text-[24px] uppercase md:text-4xl font-bold mb-4 text-center w-full">
        Тарифы
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {tariffs.map((tariff, idx) => (
          <UICard
            key={tariff.title}
            title={tariff.title}
            variant={tariff.variant}
            className={
              "flex flex-col justify-between h-full rounded-[28px] relative " +
              (idx === 1 ? "text-black" : "text-white")
            }
            titleClassName={idx === 1 || idx === 2 ? "mt-[23px]" : undefined}
            titleAddon={
              idx === 1 ? (
                <div className="rounded-[30px] bg-black py-[10px] px-[34px]">
                  <span
                    className="bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#946fe5] text-transparent bg-clip-text font-bold"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {tariff.titleAddon}
                  </span>
                </div>
              ) : idx === 2 ? (
                <div className="rounded-[30px] bg-white py-[10px] px-[34px]">
                  <span
                    className="bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#946fe5] text-transparent bg-clip-text font-bold"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {tariff.titleAddon}
                  </span>
                </div>
              ) : undefined
            }
          >
            {idx === 1 || idx === 2 ? <>{tariff.stickerSeller}</> : null}
            <div className="flex items-baseline gap-5 pb-[29px]">
              <div className="text-[64px] font-bold mb-2">{tariff.price}</div>
              <div className="text-[20px] mb-4 line-through">
                {tariff.oldPrice}
              </div>
            </div>
            <ul className="text-left text-[16px] uppercase mb-[14px]">
              {tariff.features.map((f, featureIdx) => (
                <li
                  key={typeof f === "string" ? f : `feature-${featureIdx}`}
                  className="flex items-center gap-2 mb-[14px]"
                >
                  <span className="mt-1">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6"
                        cy="6"
                        r="6"
                        fill={idx === 1 ? "#000" : "#FFF"}
                      />
                    </svg>
                  </span>
                  <span>{typeof f === "string" ? f : f}</span>
                </li>
              ))}
            </ul>
            <UIButton
              variant={tariff.buttonVariant}
              sticker={tariff.sticker}
              className={
                "w-full font-semibold text-[14px]" +
                (idx === 0 ? " mt-[110px]" : "")
              }
            >
              {tariff.buttonText}
            </UIButton>
          </UICard>
        ))}
      </div>
    </section>
  );
}
