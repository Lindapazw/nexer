"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
// import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useMediaQuery } from "react-responsive";

const HomeHeader = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  // Ancho de la pantalla
  const destopMode = useMediaQuery({ query: "(min-width: 1300px)" });

  useEffect(() => {
    const handleScroll = () => {
      // header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  console.log(header);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <Image
          src={"/logos/logo.png"}
          width={164}
          height={34}
          alt="Nexer logo"
        />
      </div>
    </header>
  );
};
export default HomeHeader;
