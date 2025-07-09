"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div
        id="contact"
        className="w-full min-h-[60vh] flex md:flex-row flex-col-reverse p-3 gap-3"
      >
        <div className="relative w-full">
          <Image
            src="/Plant-1.png"
            height={1000}
            width={1000}
            alt="distance agafay lalla takerkoust, lalla takerkoust restaurant"
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full min-h-[60vh]">
          <div className="w-full h-full">
            <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center shadow-md rounded-lg lg:p-20 p-5 font-medium">
              <Image
                src="/casalalla-logo.png"
                alt="agafay takerkoust, lalla takerkoust agafay, agafay désert marrakech, casalalla"
                width={1000}
                height={1000}
                priority
                className={`w-36`}
              />
              <p className="text-[17px] lg:text-[18px] font-light leading-[30px] italic text-secondary_2">
                {t("contact.title")}
              </p>
              <p className="text-[14px] font-light leading-[30px]  text-secondary_2">
                {t("contact.open")}
                <br />
                {t("contact.open_time")}
              </p>
              <div className="text-[14px] leading-[30px] text-secondary_2 flex justify-center items-center gap-2">
                <span>Email : </span>
                <Link href="#">{`reservations@casalallatakerkoust.com`}</Link>
              </div>
              <div className="text-[14px] leading-[30px] text-secondary_2 flex justify-center items-center gap-2">
                <span>Tel :</span>
                <Link href="#">{`+212 675-480103`}</Link>
              </div>
              <div className="w-full text-black py-4 flex justify-center items-center text-secondary_2 gap-3">
                <Link href="http://wa.me/212675480103" target="_blank">
                  <FaWhatsappSquare color="#a1676b" size={25} />
                </Link>
                <Link
                  href="https://www.instagram.com/casa.lalla.takerkoust/"
                  target="_blank"
                >
                  <FaInstagramSquare color="#a1676b" size={25} />
                </Link>
                <Link
                  href="mailto:reservations@casalallatakerkoust.com"
                  target="_blank"
                >
                  <FaMailBulk color="#a1676b" size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Contact;
