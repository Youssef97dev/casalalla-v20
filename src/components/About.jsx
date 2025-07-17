"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const About = () => {
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
      id="restaurant"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col-reverse p-3 gap-3"
    >
      <div className="relative w-full">
        <Image
          src={isMobile ? "/images/about-small.jpg" : "/images/about-large.jpg"}
          height={1000}
          width={1000}
          alt="casa lalla takerkoust, agafay marrakech, agafay restaurant, lalla takerkoust restaurant"
          priority
          className="object-cover w-full h-full rounded-md"
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center shadow-md rounded-lg lg:p-20 p-8">
          <h1 className="text-[20px] lg:text-[26px] leading-[28px] tracking-[2px] font-light mb-5 text-primary_2 text-justify">
            {t("about.title")}
          </h1>
          <p className="text-[14px] lg:text-[16px] font-light lg:font-thin italic tracking-wider leading-[28px]  text-justify py-1">
            {t("about.content_1")}
          </p>
          <p className="text-[14px] lg:text-[16px] font-light lg:font-thin italic tracking-wider leading-[28px]  text-justify py-1">
            {t("about.content_2")}
          </p>
          <p className="text-[14px] lg:text-[16px] font-light lg:font-thin italic tracking-wider leading-[28px]  text-justify py-1">
            {t("about.content_3")}
          </p>
          <p className="w-full text-[14px] lg:text-[16px] font-normal italic tracking-wider leading-[28px]  text-left py-1">
            {t("about.content_4")}
          </p>
          <Link
            href="/booking"
            className="mt-4 py-2 px-8 uppercase tracking-widest border border-primary_2 text-primary_2 rounded-lg text-[12px] leading-[34px] hover:bg-primary_2 hover:text-white duration-200 transition-all ease-out font-azahra"
          >
            {t("about.button_book")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
