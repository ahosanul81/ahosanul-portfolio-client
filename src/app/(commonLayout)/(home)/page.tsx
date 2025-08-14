import About from "@/components/about/About";

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
        <Link href={"/projects"}>
          <button type="button">See All Projects</button>
        </Link>
      </div>
    </div>
  );
}
