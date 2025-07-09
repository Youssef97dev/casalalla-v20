"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Accordion from "./Accordion";
import Slides from "./Slides";
import { useTranslation } from "react-i18next";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const itemsMobile = [
  {
    src: "/images/activities-small-1.jpg",
    type: "image",
  },
  {
    src: "/images/activities-small-2.jpg",
    type: "image",
  },
  {
    src: "/images/activities-small-3.jpg",
    type: "image",
  },
  {
    src: "/video-4.mp4",
    type: "video",
  },
];

const Activities = () => {
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
      id="activities"
      className="w-full min-h-screen flex md:flex-row-reverse flex-col p-3 gap-3"
    >
      <div className="relative w-full">
        {isMobile ? (
          <div className="w-full h-[80vh] md:hidden block">
            <Swiper
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              speed={1400}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next-ex1",
                prevEl: ".swiper-button-prev-ex1",
              }}
              className="swiper w-full h-full"
              id="slider1"
            >
              <div className="swiper-wrapper">
                {itemsMobile.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      {item.type === "image" ? (
                        <Image
                          src={`${item.src}`}
                          alt="agafay activities, lalla takerkoust marrakech, agafay activité, lalla takerkoust activities"
                          width={1000}
                          height={1000}
                          priority
                          className="object-cover w-full h-full rounded-md"
                        />
                      ) : (
                        <video
                          className="object-cover h-full w-full rounded-md"
                          autoPlay
                          loop
                          muted
                        >
                          <source src={`${item.src}`} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        ) : (
          <Image
            src="/images/activities.jpg"
            alt="agafay activities, agafay marrakech, agafay activité, lalla takerkoust activities"
            height={1000}
            width={1000}
            priority
            className="object-cover w-full h-full rounded-md md:block hidden"
          />
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4 pt-10 pb-5 shadow-md rounded-lg px-5">
        <Slides />
        <div className="w-full h-full flex flex-col justify-start items-center gap-1 text-center  lg:px-16">
          <h1 className="text-[20px] lg:text-[26px] leading-[28px] tracking-[2px] font-light mb-5 text-primary_2 my-10">
            {t("activities.title")}
          </h1>
          <Accordion />
          <Link
            href="/custom-booking"
            className="mt-8 py-2 px-8 w-full uppercase tracking-widest border border-primary_2 text-primary_2 rounded-lg text-[12px] leading-[34px] hover:bg-primary_2 hover:text-white duration-200 transition-all ease-outb"
          >
            {t("activities.book_experience")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Activities;
