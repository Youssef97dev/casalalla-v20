import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Buttons = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-between gap-3 items-center px-5">
      <Link
        target="_blank"
        href={t("navbar.menu")}
        className="w-full rounded-lg bg-white hover:bg-black hover:text-white py-2 text-center shadow-md font-light italic"
      >
        {t("navbar.cart")}
      </Link>
      <Link
        href="/booking"
        className="w-full rounded-lg bg-primary_2 hover:bg-book_btn_hover text-white py-2 text-center shadow-md font-light italic"
      >
        {t("navbar.reservation")}
      </Link>
    </div>
  );
};

export default Buttons;
