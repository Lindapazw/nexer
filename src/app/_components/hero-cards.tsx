"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

const HeroCards = ({ className, ...props }: HTMLMotionProps<"div">) => {
  const [visible, setVisible] = useState(false);

  return (
    <motion.div
      {...props}
      onViewportEnter={() => setVisible(true)}
      onViewportLeave={() => setVisible(false)}
      className={cn(
        "flex justify-center gap-8 text-white lg:gap-20",
        className,
      )}
    >
      {visible && (
        <>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
            <p className="text-4xl font-bold text-white lg:text-6xl">
              +<CountUp start={0} end={20} duration={2} delay={0} />
            </p>

            <p className="text-white lg:text-2xl">Años de experiencia</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
            <p className="text-4xl font-bold text-white lg:text-6xl">
              <CountUp start={0} end={500} duration={2} delay={0} /> MW
            </p>

            <p className="text-white lg:text-2xl">Proyectos desarrollados</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
            <p className="text-4xl font-bold text-white lg:text-6xl">
              <CountUp start={0} end={600} duration={2} delay={0} /> MW
            </p>

            <p className="text-white lg:text-2xl">Proyectos en desarrollo</p>
          </div>
        </>
      )}
    </motion.div>
  );
};
export default HeroCards;
