import React, { useState } from "react";
import Button from "../../Components/Buttons/Button";
import { RxResume } from "react-icons/rx";
import { FiDownload, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button2 from "../../Components/Buttons/Button2";
import { IoClose } from "react-icons/io5";

const Resume = () => {
  const [closeModal, setCloseModal] = useState(false);

  const eduInfo = [
    {
      degree: "SSC (secondary School Certificate)",
      institution: "Ailhash Laxmipur High School",
      group: "Science",
      passingYear: "2017",
      GPA: "4.18",
    },
    {
      degree: "HSC (Higher secondary Certificate)",
      institution: "Kushtia Govt. Central College",
      group: "Humanities",
      passingYear: "2019",
      GPA: "4.75",
    },
    {
      degree: "Honour's",
      institution: "Comilla University",
      group: "Public Administration",
      passingYear: "Ongoing",
    },
    {
      degree: "Front-end Web Developer",
      institution: "Programming Hero",
      group: "Web Development",
      passingYear: "28 Dec 2023 - 23 July 2024",
    },
  ];

  return (
    <div className="mb-24 space-y-7">
      <div className="flex gap-3 items-center ">
        <Link
          to={
            "https://drive.google.com/file/d/1j0LCL9apH6kaTMgJSVNoEdxAj4PBdRGI/view?usp=sharing"
          }
          target="blank"
        >
          <FiDownload className="text-white text-2xl hover:text-span " />
        </Link>

        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          <FiEye className="text-white text-2xl hover:text-span " />
        </button>
        <dialog
          onClick={() => setCloseModal(true)}
          id="my_modal_4"
          className="modal"
        >
          <div className="modal-box w-11/12 max-w-5xl bg-background">
            <iframe
              className="w-full h-screen"
              src="https://drive.google.com/file/d/1j0LCL9apH6kaTMgJSVNoEdxAj4PBdRGI/preview"
              allow="autoplay"
            ></iframe>

            <div className="modal-action">
              <form method="dialog ">
                {/* if there is a button, it will close the modal */}
                <Button2
                  icon={<IoClose />}
                  title={"close"}
                  px={"px-4"}
                ></Button2>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <h1 className="text-white text-5xl">
        Education & <span className="text-span ">Experience</span>
      </h1>

      <div>
        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {eduInfo.map((item) => (
            <li key={item.degree} className="mb-10 ms-6 mt-12">
              <span className="absolute ml-2 mt-2 flex items-center justify-center w-4 h-4 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                <svg
                  className="w-3.5 h-3.5 text-green-500 dark:text-green-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="text-2xl text-title">Degree: {item.degree}</h3>
              <p className="text-paragraph">Institution: {item.institution}</p>
              <p className="text-paragraph">
                {item.group.toLowerCase() === "humanities" ||
                item.group.toLowerCase() === "science" ||
                item.group.toLowerCase() === "business"
                  ? "Group:"
                  : "Department:"}{" "}
                {item.group}
              </p>
              <p className="text-paragraph">PassingYear: {item.passingYear}</p>
              <p className="text-paragraph">GPA: {item.GPA}</p>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h1 className="text-xl text-span">
          I have no professional experience at this moment.But I have a lot of
          personal projects in learning stage. I am eagerly enthusiastic to
          learn new technology.
        </h1>
      </div>
    </div>
  );
};

export default Resume;
