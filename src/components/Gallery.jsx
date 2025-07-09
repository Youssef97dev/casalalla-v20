import React from "react";
import Image from "next/image";
import Link from "next/link";

const imagesUrl = [
  "/images/gallery-1.jpeg",
  "/images/gallery-2.jpeg",
  "/images/gallery-3.jpeg",
];

const Gallery = () => {
  return (
    <>
      <div className="hidden md:flex w-full justify-between items-center space-x-2 px-3">
        {imagesUrl.map((image, index) => (
          <Link
            key={index}
            href="/gallery"
            className="cursor-pointer w-full h-full"
          >
            <div className="relative">
              <Image
                src={image}
                alt="casa lalla tekerkoust, agafay desert, white camel agafay, agafay activités"
                width={1000}
                height={1000}
                priority
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </Link>
        ))}
      </div>
      <Link href="/gallery" className="cursor-pointer p-3 rounded-md">
        <div className="flex h-full w-full justify-center items-center  relative md:hidden">
          <Image
            src="/images/hero-casalalla-large.jpg"
            alt="casa lalla tekerkoust, agafay desert, white camel agafay, agafay activités"
            width={600}
            height={700}
            priority
            className="w-full h-full object-cover rounded-md"
          />
          <div className="z-10 absolute inset-0 bg-[#000] h-full mix-blend-multiply opacity-20 rounded-md"></div>
          <span className="absolute w-full h-full font-azahra flex justify-center items-center text-4xl text-white z-10">
            GALLERY
          </span>
        </div>
      </Link>
    </>
  );
};

export default Gallery;
