"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroCards from "./hero-cards";

const HomeHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        <Image
          src="/images/about_image.jpg"
          alt="hero video"
          fill
          className="h-full w-full"
          priority
          sizes="50vw"
        />
      </video>

      <div className="absolute inset-0 h-full w-full bg-black/25"></div>

      <div className="container mx-auto">
        <motion.h1
          className="absolute inset-x-0 top-1/4 flex flex-col items-center text-white lg:inset-x-auto lg:top-1/2 lg:-translate-y-1/2 lg:items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Promoviendo la
          <motion.span
            className="font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Energía sostenible
          </motion.span>
          del futuro
        </motion.h1>

        <HeroCards className="absolute inset-x-0 top-1/2 w-full flex-col pb-12 lg:bottom-0 lg:top-auto lg:flex-row" />
      </div>
    </section>
  );
};

export default HomeHero;
