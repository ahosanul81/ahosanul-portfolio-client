"use client";
import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaCss3Alt } from "react-icons/lia";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const skills = [
  { icon: TiHtml5, color: "#DD4B25" },
  { icon: LiaCss3Alt, color: "#254BDD" },
  { icon: IoLogoJavascript, color: "#dcef0d" },
  { icon: SiNextdotjs, color: "#ffffff" },
  { icon: FaReact, color: "#01CEF1" },
  { icon: SiExpress, color: "#ffffff" },
  { icon: FaNodeJs, color: "#42c440" },
  { icon: DiMongodb, color: "#8aff88" },
];

export default function Skills() {
  return (
    <div className="overflow-hidden h-full bg-secondary-color">
      <h1 className="text-4xl font-bold text-green-400 text-center">Skills</h1>

      <div className="flex items-center justify-center mt-5 lg:mt-36 mb-6 lg:mb-10">
        <div className="flex p-5 lg:p-8 bg-cardBg gap-6">
          {skills?.map(({ icon: Icon, color }, index) => (
            <motion.span
              key={index}
              style={{ color }}
              className="text-5xl lg:text-8xl"
              animate={{
                y: [0, index % 2 === 0 ? -20 : 20, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.3,
              }}
            >
              <Icon />
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
