import Projects from "@/components/projects/Projects";
import { getAllProjects } from "@/lib/providers/dataFetch/projects";

export default async function ProjectPage() {
  const { data: projects } = await getAllProjects();
  return <Projects projects={projects} />;
}
