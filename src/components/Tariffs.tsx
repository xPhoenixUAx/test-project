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
  buttonVariant?: "primary" | "secondary" | "blackbutton";
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
  },
  {
    title: "Максимум",
    price: "₴2990",
    oldPrice: "₴3490",
    features: ["6 місяців доступу", "Всі уроки", "Індивідуальний супровід"],
    variant: "whitecard",
    buttonText: "Купить",
    buttonVariant: "blackbutton",
  },
];

export default function Tariffs() {
  return (
    <section className="container-mobile py-10 grid gap-6 md:grid-cols-3">
      <h2 className="text-[24px] uppercase md:text-4xl font-bold mb-4 text-center w-full">
        Тарифы
      </h2>
      {tariffs.map((tariff, idx) => (
        <UICard
          key={tariff.title}
          title={tariff.title}
          variant={tariff.variant}
          className={
            "flex flex-col rounded-[28px] " +
            (idx === 1 ? "text-black" : "text-white")
          }
        >
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
    </section>
  );
}
