import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";

import Introduction from "@/components/introduction/Introduction";
import Projects from "@/components/projects/Projects";

import Skills from "@/components/skills/Skills";
import { getAllProjects } from "@/lib/providers/dataFetch/projects";
import Link from "next/link";

export default async function Home() {
  const { data: projects } = await getAllProjects();

  return (
    <div className="space-y-6">
      <Introduction />
      <About />
      <Skills />

      <div>
        <h1 className="text-green-500 font-bold text-center text-4xl">
          Latest Projects
        </h1>
        <Projects projects={projects?.slice(0, 4)} />
        <div className="flex justify-center ">
          <Link href={"/projects"}>
            <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                View All Projects
              </span>
            </button>
          </Link>
        </div>
      </div>
      <Contact />
    </div>
  );
}
