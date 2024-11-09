"use client";

import { useEffect, useState } from "react";

// next image
// import Image from "next/image";

// LocomotiveScroll
// import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";

// media queries
import { useMediaQuery } from "react-responsive";

const HomeHeader = () => {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  // Ancho de la pantalla
  const destopMode = useMediaQuery({ query: "(min-width: 1300px)" });

  useEffect(() => {
    console.log(destopMode);
  });

  return <div>HomeHeader</div>;
};
export default HomeHeader;
