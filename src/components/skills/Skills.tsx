"use client";
// import { icons } from "antd/es/image/PreviewGroup";
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaCss3Alt } from "react-icons/lia";
import { SiExpress, SiMongoose, SiNextdotjs, SiPrisma } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

const skills = [
  { icon: <TiHtml5 />, color: "#DD4B25" },
  { icon: <LiaCss3Alt />, color: "#254BDD" },
  { icon: <IoLogoJavascript />, color: "#dcef0d" },
  { icon: <FaReact />, color: "#01CEF1" },
  { icon: <SiNextdotjs />, color: "#ffffff" },
  { icon: <FaNodeJs />, color: "#42c440" },
  { icon: <SiExpress />, color: "#ffffff" },
  { icon: <DiMongodb />, color: "#8aff88" },
  { icon: <SiMongoose />, color: "#8aff88" },
  { icon: <BiLogoPostgresql />, color: "#679BC6" },
  { icon: <SiPrisma />, color: "FFFFFF" },
];

export default function Skills() {
  return (
    <div className="overflow-hidden h-full bg-secondary-color">
      <h1 className="text-4xl font-bold text-green-400 text-center">Skills</h1>

      <div className="flex items-center justify-center mt-5 lg:mt-36 mb-6 lg:mb-10">
        <div className="flex justify-center p-5 lg:p-8 bg-cardBg gap-6 flex-wrap">
          {skills?.map(({ icon, color }, index) => (
            <motion.span
              key={index}
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
              <span style={{ color }}>{icon}</span>
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
