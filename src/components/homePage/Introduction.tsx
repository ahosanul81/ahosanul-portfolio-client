import { MdOutlineFileDownload } from "react-icons/md";
import Button from "../customComponent/Button";
import Image from "next/image";
import Link from "next/link";

export default function Introduction() {
  return (
    <main className=" flex justify-between  items-center py-7 bg-[#09101A]">
      <section className="w-1/2 space-y-12">
        <h1 className="text-5xl text-white  font-extrabold">
          Hi, I am Ahosanul! <br /> Web{" "}
          <span className="text-primary-color">Developer</span>
        </h1>
        <p className="text-[#A2A2A2]">
          I am a dedicated front-end developer with expertise in HTML5, CSS3,
          JavaScript, React, Next.js and responsive design. I focus on creating
          visually appealing, user-friendly, and high-performance websites that
          work seamlessly across all devices and browsers. My goal is to deliver
          exceptional user experiences through innovative and efficient web
          solutions.
        </p>
        <div>
          <Link
            href={
              "https://drive.google.com/file/d/1j0LCL9apH6kaTMgJSVNoEdxAj4PBdRGI/view?usp=sharing"
            }
            target="blank"
          >
            <Button
              text="Download CV"
              className="py-4 px-8"
              icon={<MdOutlineFileDownload />}
            />
          </Link>
        </div>
      </section>
      <section className="w-1/2 flex justify-end">
        <Image
          className="object-cover clip-hexagon  border-4 p-2"
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
