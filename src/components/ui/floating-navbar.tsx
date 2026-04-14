"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-[#2A2545]/60 rounded-full bg-[#06050E]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(124,58,237,0.15)] z-[5000] px-8 py-4 items-center justify-center space-x-6",
          className
        )}
      >
        <span className="font-display font-bold text-sm gradient-text tracking-wider mr-4">
          JA
        </span>
        {navItems.map((navItem, idx) => (
          <a
            key={idx}
            href={navItem.link}
            className="relative font-body text-[#6E6A96] hover:text-[#EEE8FF] text-sm transition-colors duration-200"
          >
            {navItem.name}
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
