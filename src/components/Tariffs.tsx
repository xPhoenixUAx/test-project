import React from "react";
import UICard, { UICardVariant } from "@/ui/UICard";
import UIButton from "@/ui/UIButton";

interface Tariff {
  title: string;
  price: string;
  description: string;
  features: string[];
  variant?: UICardVariant;
  buttonText?: string;
  sticker?: React.ReactNode;
}

const tariffs: Tariff[] = [
  {
    title: "Старт",
    price: "₴990",
    description: "Для тих, хто тільки починає знайомство з відеоконтентом.",
    features: ["1 місяць доступу", "Базові уроки", "Підтримка в чаті"],
    variant: "default",
    buttonText: "Обрати тариф",
  },
  {
    title: "Профі",
    price: "₴1990",
    description: "Для тих, хто хоче швидко рости та отримувати результат.",
    features: ["3 місяці доступу", "Всі уроки", "Персональні консультації"],
    variant: "gradient",
    buttonText: "Обрати тариф",
    sticker: <span className="text-xs font-bold">Топ продаж</span>,
  },
  {
    title: "Максимум",
    price: "₴2990",
    description: "Для тих, хто хоче максимум можливостей та підтримки.",
    features: ["6 місяців доступу", "Всі уроки", "Індивідуальний супровід"],
    variant: "bordered",
    buttonText: "Обрати тариф",
  },
];

export default function Tariffs() {
  return (
    <section className="container-mobile py-10 grid gap-6 md:grid-cols-3">
      {tariffs.map((tariff) => (
        <UICard
          key={tariff.title}
          title={tariff.title}
          description={tariff.description}
          variant={tariff.variant}
          className="flex flex-col items-center text-center"
        >
          <div className="text-3xl font-bold mb-2">{tariff.price}</div>
          <ul className="mb-4 text-sm text-left list-disc list-inside">
            {tariff.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <UIButton sticker={tariff.sticker} className="w-full mt-auto">
            {tariff.buttonText}
          </UIButton>
        </UICard>
      ))}
    </section>
  );
}
