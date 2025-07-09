"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="events"
      className="w-full h-full lg:h-screen flex md:flex-row flex-col-reverse p-3 gap-3"
    >
      <div className="relative w-full">
        <Image
          src={
            isMobile ? "/images/events-small.jpg" : "/images/events-large.jpg"
          }
          height={1000}
          width={1000}
          alt="lalla takerkoust lake, barrage lalla takerkoust, lalla takerkoust weather, lalla takerkoust activités"
          priority
          className="object-cover w-full h-full rounded-md"
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center shadow-md rounded-lg lg:p-20 p-8">
          <h1 className="text-[20px] lg:text-[26px] leading-[28px] tracking-[2px] font-light mb-5 text-primary_2 text-justify">
            {t("events.title")}
          </h1>
          <p className="text-[14px] lg:text-[16px] font-light lg:font-thin italic tracking-wider leading-[28px]  text-justify py-1">
            {t("events.content_1")}
          </p>
          <p className="text-[14px] lg:text-[16px] font-light lg:font-thin italic tracking-wider leading-[28px]  text-justify py-1">
            {t("events.content_2")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
