"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  {
    src: "/images/activities-slide-1.jpg",
  },
  {
    src: "/images/activities-slide-2.jpg",
  },
  {
    src: "/images/activities-slide-3.jpg",
  },
  {
    src: "/images/activities-slide-4.jpg",
  },
  {
    src: "/images/activities-slide-5.jpg",
  },
  {
    src: "/images/activities-slide-6.jpg",
  },
  {
    src: "/images/activities-slide-7.jpg",
  },
  {
    src: "/images/activities-slide-8.jpg",
  },
  {
    src: "/images/activities-slide-9.jpg",
  },
  {
    src: "/images/activities-slide-10.jpg",
  },
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-64 lg:w-[500px] lg:h-96 px-5 lg:px-0">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={`lalla takerkoust activités, lalla takerkoust marrakech, lalla takerkoust village, lalla takerkoust jet ski`}
            height={2000}
            width={2000}
            priority
            className="object-cover w-full h-full shadow-md rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Slides;
