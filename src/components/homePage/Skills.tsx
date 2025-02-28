import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaCss3Alt } from "react-icons/lia";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

export default function Skills() {
  return (
    <div className="mb-24 overflow-hidden h-full bg-secondary-color">
      <h1 className="text-4xl font-bold text-white">Skills</h1>
      <div className="flex items-center justify-center gap-6 mt-20 lg:mt-36 mb-14 lg:mb-24">
        <div className="grid grid-cols-3 gap-4 flex-wrap border-2 border-border p-5 lg:p-8 transform rotate-45 bg-cardBg">
          <span className="text-5xl lg:text-8xl text-[#DD4B25] transform -rotate-45">
            <TiHtml5 />
          </span>
          <span className="text-5xl lg:text-8xl text-[#DD4B25] transform -rotate-45">
            <TiHtml5 />
          </span>
          <span className="text-5xl lg:text-8xl text-[#254BDD] transform -rotate-45">
            <LiaCss3Alt />
          </span>
          <span className="text-5xl lg:text-8xl text-[#dcef0d] transform -rotate-45">
            <IoLogoJavascript />
          </span>
          <span className="text-5xl lg:text-8xl text-white transform -rotate-45">
            <SiNextdotjs />
          </span>
          <span className="text-5xl lg:text-8xl text-[#01CEF1] transform -rotate-45">
            <FaReact />
          </span>
          <span className="text-5xl lg:text-8xl text-[#ffffff] transform -rotate-45">
            <SiExpress />
          </span>
          <span className="text-5xl lg:text-8xl text-[#42c440] transform -rotate-45">
            <FaNodeJs />
          </span>
          <span className="text-5xl lg:text-8xl text-[#8aff88] transform -rotate-45">
            <DiMongodb />
          </span>
          {/* <span className='text-4xl lg:text-8xl text-[#8aff88] transform -rotate-45'><DiMongodb /></span> */}
        </div>
      </div>
    </div>
  );
}
