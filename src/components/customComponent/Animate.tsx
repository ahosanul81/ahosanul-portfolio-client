"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

interface AnimateProps {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
  initial?: { scale: number } | string;
  animate?: { scale?: number; y?: [number, number, number] } | string;
  whileInView?: string;
  viewport?: { once: boolean; amount: number };
}

export default function Animate({
  children,
  className,
  variants,
  initial,
  animate,
  whileInView,
  viewport,
}: AnimateProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
