"use client";
import { useState, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import Buttons from "@/components/Buttons";
import Content from "./Content";
import FormMessage from "./FormMessage";
import Mapbox from "./Mapbox";
import Footer from "@/components/Footer";

const Loader = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsClient(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="relative flex flex-col justify-center items-center gap-2 md:gap-0">
          <Content />
          <FormMessage />
          <Mapbox />
          <Footer />
          <div className="fixed bottom-5 left-0 w-full block lg:hidden z-10">
            <Buttons />
          </div>
          <div className="fixed top-12 right-10 w-[20%] hidden lg:block z-10">
            <Buttons />
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <CircleLoader color="#c20022" size={100} />
        </div>
      )}
    </>
  );
};

export default Loader;
