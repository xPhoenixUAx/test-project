import React, { useState, useEffect } from "react";

interface ModalData {
  name: string;
  email: string;
  telegram: string;
}

interface UIModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: ModalData) => void;
  title?: string;
}

export default function UIModal({
  isOpen,
  onClose,
  onSubmit,
  title = "Форма",
}: UIModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    telegram?: string;
  }>({});
  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    telegram?: boolean;
  }>({});

  useEffect(() => {
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Введите имя";
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) next.email = "Введите Email";
    else if (!emailRe.test(email)) next.email = "Неверный формат Email";
    const tgRe = /^@?[A-Za-z0-9_]{5,32}$/;
    if (!telegram.trim()) next.telegram = "Введите ник Telegram";
    else if (!tgRe.test(telegram.trim()))
      next.telegram =
        "Неверный формат Telegram (5-32 символа, латиница, цифры, _ )";
    setErrors(next);
  }, [name, email, telegram]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      setTouched({ name: true, email: true, telegram: true });
      return;
    }
    const data: ModalData = { name, email, telegram };
    if (onSubmit) onSubmit(data);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        className="relative h-full bg-custom-gradient uicard-default-shadow rounded-2xl shadow-xl w-full lg:h-auto max-w-md mx-4 p-6 px-[40px] py-[80px]"
      >
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-800"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00618 10.872L2.47511 17.4076C2.23075 17.6521 1.91968 17.7745 1.54191 17.7746C1.16413 17.7747 0.852975 17.6526 0.608445 17.4082C0.363916 17.1639 0.241587 16.8528 0.241456 16.475C0.241326 16.0973 0.36344 15.7861 0.6078 15.5416L7.13887 9.00598L0.603279 2.47491C0.35875 2.23055 0.23642 1.91948 0.23629 1.5417C0.236159 1.16392 0.358273 0.852768 0.602633 0.608239C0.846993 0.363709 1.15806 0.24138 1.53584 0.241249C1.91362 0.241119 2.22477 0.363233 2.4693 0.607593L9.00489 7.13867L15.536 0.603072C15.7803 0.358543 16.0914 0.236213 16.4692 0.236083C16.847 0.235952 17.1581 0.358066 17.4026 0.602426C17.6472 0.846786 17.7695 1.15785 17.7696 1.53563C17.7698 1.91341 17.6476 2.22456 17.4033 2.46909L10.8722 9.00469L17.4078 15.5358C17.6523 15.7801 17.7747 16.0912 17.7748 16.469C17.7749 16.8467 17.6528 17.1579 17.4084 17.4024C17.1641 17.647 16.853 17.7693 16.4752 17.7694C16.0975 17.7695 15.7863 17.6474 15.5418 17.4031L9.00618 10.872Z"
              fill="white"
            />
          </svg>
        </button>

        <h3 className="text-xl font-bold mb-4 uppercase text-center">
          {title}
        </h3>

        <form
          id="modal-form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 pb-[140px]"
        >
          <label className="flex flex-col items-center text-sm">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((s) => ({ ...s, name: true }))}
              className="inputs w-full bg-white py-[15px] px-[20px] rounded-[14px] placeholder-[#0c0117]"
              placeholder="Имя"
            />
            {touched.name && errors.name ? (
              <span className="text-sm text-red-500 mt-1">{errors.name}</span>
            ) : null}
          </label>

          <label className="flex flex-col items-center text-sm">
            <input
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              onBlur={() => setTouched((s) => ({ ...s, telegram: true }))}
              className="inputs w-full bg-white py-[15px] px-[20px] rounded-[14px] placeholder-[#0c0117]"
              placeholder="Ник Telegram"
            />
            {touched.telegram && errors.telegram ? (
              <span className="text-sm text-red-500 mt-1">
                {errors.telegram}
              </span>
            ) : null}
          </label>

          <label className="flex flex-col items-center text-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((s) => ({ ...s, email: true }))}
              className="inputs w-full bg-white py-[15px] px-[20px] rounded-[14px] placeholder-[#0c0117]"
              placeholder="Email*"
            />
            {touched.email && errors.email ? (
              <span className="text-sm text-red-500 mt-1">{errors.email}</span>
            ) : null}
          </label>
        </form>

        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex items-center justify-center">
          <button
            type="submit"
            form="modal-form"
            disabled={Object.keys(errors).length > 0}
            className={
              "px-4 py-2 bg-white text-black font-bold rounded-[10px] w-[310px] h-[50px]" +
              (Object.keys(errors).length > 0
                ? " bg-gray-300 cursor-not-allowed"
                : " bg-gradient-to-r from-[#5bdbfd] via-[#7375ff] to-[#e56f8c]")
            }
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
}
