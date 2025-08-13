// "use client";
// import { CheckCircleOutlined } from "@ant-design/icons";
// import ShimmerButton from "../customComponent/ShimmerButton";
// import { FaGraduationCap } from "react-icons/fa6";
// // import AOS from "aos";
// // AOS.init();
// export default function About() {
//   return (
//     <div className="space-y-3 ">
//       <h1 className="text-primary-color font-bold text-4xl text-center ">
//         About Me
//       </h1>
//       <div className="flex w-full gap-6">
//         <div className=" w-1/2 border border-border-color rounded-md p-4 space-y-5">
//           <h1 className="text-title-color text-2xl font-bold">
//             Developing High-Performance and User-Centric Web Applications
//           </h1>
//           <p className="">
//             I’m a passionate web developer skilled in building responsive,
//             user-friendly, and scalable web applications using modern
//             technologies like React, Node.js, Express.js, and MongoDB. I enjoy
//             turning ideas into functional digital solutions that deliver real
//             impact.
//           </p>
//           <ul className="flex items-center">
//             <ShimmerButton text="Frontend Development" />
//             <ShimmerButton text="Backend Development" />
//             <ShimmerButton text="Full Stack Development" />
//           </ul>

//           <ul className="flex justify-around ">
//             <li className="flex flex-col justify-center items-center space-y-1">
//               <CheckCircleOutlined className="text-xl font-semibold text-green-400" />{" "}
//               <span className="text-2xl  font-bold">5+</span>{" "}
//               <span>Completed Projects</span>
//             </li>
//             <li className="flex flex-col justify-center items-center space-y-1">
//               <CheckCircleOutlined className="text-xl font-semibold text-green-400" />{" "}
//               <span className="text-2xl  font-bold">5+</span>{" "}
//               <span>Completed Projects</span>
//             </li>
//             <li className="flex flex-col justify-center items-center space-y-1">
//               <CheckCircleOutlined className="text-xl font-semibold text-green-400" />{" "}
//               <span className="text-2xl  font-bold">5+</span>{" "}
//               <span>Completed Projects</span>
//             </li>
//           </ul>
//         </div>
//         <div className=" w-1/2 border border-border-color p-4 space-y-5">
//           <h1 className="text-title-color text-2xl font-bold">
//             Education Qualifications
//           </h1>
//           <ul>
//             {/* qualification - 1 */}
//             <div className="flex gap-3 items-center">
//               <span>
//                 <FaGraduationCap className=" text-6xl p-1 text-green-400 rounded-md" />
//               </span>
//               <div className="bg-[#614889] px-4 py-2 rounded-md ">
//                 <h2 className="text-xl font-semibold">
//                   BSS in Public Administration
//                 </h2>
//                 <p className="text-xs">
//                   Comilla University, Cumilla, Bangladesh
//                 </p>

//                 <p className="text-xs">Passing Year: Ongoing</p>
//               </div>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import { CheckCircleOutlined } from "@ant-design/icons";
import ShimmerButton from "../customComponent/ShimmerButton";
import { FaGraduationCap } from "react-icons/fa6";
import Animate from "../customComponent/Animate";

export default function About() {
  return (
    <div className="space-y-3">
      <h1 className="text-primary-color font-bold text-4xl text-center">
        About Me
      </h1>
      <div className="flex w-full gap-6">
        {/* Left side */}
        <Animate
          className={"w-1/2"}
          variants={{
            hidden: { opacity: 0, x: -50, y: 0 },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0,
                ease: "easeOut",
              },
            },
          }}
          initial={"hidden"}
          // animate={"visible"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className=" border border-border-color rounded-md p-4 space-y-5">
            <h1 className="text-title-color text-2xl font-bold">
              Developing High-Performance and User-Centric Web Applications
            </h1>
            <p>
              I’m a passionate web developer skilled in building responsive,
              user-friendly, and scalable web applications using modern
              technologies like React, Node.js, Express.js, and MongoDB. I enjoy
              turning ideas into functional digital solutions that deliver real
              impact.
            </p>
            <ul className="flex items-center">
              <ShimmerButton text="Frontend Development" />
              <ShimmerButton text="Backend Development" />
              <ShimmerButton text="Full Stack Development" />
            </ul>

            <ul className="flex justify-around">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <li
                    key={i}
                    className="flex flex-col justify-center items-center space-y-1"
                  >
                    <CheckCircleOutlined className="text-xl font-semibold text-green-400" />
                    <span className="text-2xl font-bold">5+</span>
                    <span>Completed Projects</span>
                  </li>
                ))}
            </ul>
          </div>
        </Animate>

        {/* Right side */}

        <Animate
          variants={{
            hidden: { opacity: 0, x: 50, y: 0 },
            visible: {
              opacity: 1,
              x: 0,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0,
                ease: "easeOut",
              },
            },
          }}
          initial={"hidden"}
          // animate={"visible"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={"w-1/2"}
        >
          <div className=" border border-border-color p-4 space-y-5">
            <h1 className="text-title-color text-2xl font-bold">
              Education Qualifications
            </h1>
            <ul>
              <div className="flex gap-3 items-center">
                <span>
                  <FaGraduationCap className="text-6xl p-1 text-green-400 rounded-md" />
                </span>
                <div className="bg-[#614889] px-4 py-2 rounded-md">
                  <h2 className="text-xl font-semibold">
                    BSS in Public Administration
                  </h2>
                  <p className="text-xs">
                    Comilla University, Cumilla, Bangladesh
                  </p>
                  <p className="text-xs">Passing Year: Ongoing</p>
                </div>
              </div>
            </ul>
          </div>
        </Animate>
      </div>
    </div>
  );
}
