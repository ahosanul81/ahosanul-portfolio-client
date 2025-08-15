import { MdOutlineFileDownload } from "react-icons/md";
import Button from "../customComponent/Button";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { PiGithubLogo } from "react-icons/pi";
import "animate.css";

export default function Introduction() {
  return (
    <main className="flex flex-col lg:flex-row justify-between  items-center py-7 bg-[#09101A]">
      <section className="w-full lg:w-1/2 space-y-5 ">
        <h1 className="animate__animated animate__slideInDown text-3xl lg:text-5xl text-white  font-extrabold">
          Hi, This is Ahosanul! <br /> Web{" "}
          <span className="text-primary-color">Developer</span>
        </h1>
        <p className="animate__animated animate__slideInDown text-[#A2A2A2] text-justify">
          I am a dedicated front-end developer with expertise in HTML5, CSS3,
          JavaScript, React, Next.js and responsive design. I focus on creating
          visually appealing, user-friendly, and high-performance websites that
          work seamlessly across all devices and browsers. My goal is to deliver
          exceptional user experiences through innovative and efficient web
          solutions.
        </p>

        <Link
          href={
            "https://drive.google.com/file/d/1j0LCL9apH6kaTMgJSVNoEdxAj4PBdRGI/view?usp=sharing"
          }
          target="blank"
        >
          <Button
            text="Resume"
            className="animate__animated animate__slideInDown py-4 px-8 text-black font-semibold mt-4"
            icon={<MdOutlineFileDownload />}
          />
        </Link>
        <ul className="animate__animated animate__slideInDown flex items-center gap-7 text-2xl">
          <li>
            <Link target="blank" href={"https://github.com/ahosanul81"}>
              <PiGithubLogo className="hover:text-orange-500" />
            </Link>
          </li>
          <li>
            <Link
              target="blank"
              href={"https://www.linkedin.com/in/ahosanulislam/"}
            >
              <AiOutlineLinkedin className="hover:text-blue-500" />
            </Link>
          </li>
          <li>
            <Link target="blank" href={"/"}>
              <FaWhatsapp className="hover:text-green-400" />
            </Link>
          </li>
          <li>
            <Link target="blank" href={"https://www.facebook.com/plabon1429"}>
              <FaFacebookF className="hover:text-blue-500" />
            </Link>
          </li>
        </ul>
      </section>
      <section className="animate__animated animate__slideInDown w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <Image
          className="rounded-full"
          src={
            "https://res.cloudinary.com/dgs2ywdd6/image/upload/v1723478377/ldz9dfhx3o9mhzx2i4pc.jpg"
          }
          height={200}
          width={300}
          alt="profile photo"
        />
      </section>
    </main>
  );
}
