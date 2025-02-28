import { Carousel, Image } from "antd";
import Button from "../customComponent/Button";
import Link from "next/link";

// const contentStyle: React.CSSProperties = {
//   height: "500px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

export const projects = [
  {
    id: 1,
    projectName: "Mediplus",
    idea: "Mediplus is a modern medical platform that connects doctors and patients efficiently. It provides appointment booking, medical records management, and an interactive dashboard for users.",
    homePageImg:
      "https://res.cloudinary.com/dgs2ywdd6/image/upload/v1739295882/Screenshot_2025-02-11_233541_nowhzz.png",
    projectLink: "lovely-lily-8b85e5.netlify.app",
  },
  {
    id: 2,
    projectName: "Book Vibes",
    idea: "User can see many books in home page. When He click particular book, seeing book details. Then He may add to whish list.",
    homePageImg:
      "https://res.cloudinary.com/dgs2ywdd6/image/upload/Screenshot_2024-07-12_230638_r42skg.png",
    projectLink: "https://loquacious-licorice-2a7e63.netlify.app/",
  },

  {
    id: 3,
    projectName: "Study Buzz",
    idea: "There have many assignment for assessing. You may give mark particular assignment and you also post an assignment. ",
    homePageImg:
      "https://res.cloudinary.com/dgs2ywdd6/image/upload/Screenshot_2024-07-12_230742_iwxtwe.png",
    projectLink: "https://magenta-selkie-5b3812.netlify.app/",
  },
];
export default function Projects() {
  return (
    <div>
      <h1 className="text-white font-bold text-4xl mb-7">My Best Projects</h1>
      <Carousel autoplay className="mb-11">
        {projects.map(
          (project: {
            id: number;
            projectName: string;
            idea: string;
            homePageImg: string;
            projectLink: string;
          }) => (
            <div key={project.id} className="bg-[#364d79]">
              <div className="flex items-center justify-evenly gap-10 p-4">
                <Image
                  className="p-8"
                  width={800}
                  height={350}
                  src={project.homePageImg}
                  alt="project-1"
                />
                <div className="space-y-4">
                  <h1 className="text-4xl text-white font-semibold">
                    {project.projectName}
                  </h1>
                  <p className="text-paragraph-color">{project.idea}</p>
                  <div>
                    <Link href={project.projectLink} target="_blank">
                      <Button
                        text="Project Live Link"
                        className="py-2 px-4 mt-2"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
}
