// import Button from "@/components/customComponent/Button";
// import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";
import Button from "@/components/customComponent/Button";
import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export default async function page({
  params,
}: {
  params: { projectId: string };
  searchParams: string;
}) {
  const { projectId } = await params;
  const res = await fetch(`http://localhost:5000/api/v1/projects/${projectId}`);
  const project = await res.json();

  return (
    <div className="container mx-auto max-w-[80%] px-4 py-10 space-y-6">
      {/* Image Section */}
      <div className="w-full max-w-4xl mx-auto">
        {project?.data?.homePageImg && (
          <Image
            src={project?.data?.homePageImg}
            width={500}
            height={300}
            alt={project?.data?.title || ""}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        )}
      </div>
      <div className="mt-4 space-y-6">
        <h2 className="text-5xl text-gray-300  font-bold ">
          {project?.data?.projectName}
        </h2>
        <p className="text-gray-400 mt-4 text-justify">{project?.data?.idea}</p>

        <div>
          <h1 className="text-gray-300  font-bold text-2xl">Technologies</h1>
          {project?.data?.technologies?.map((tech: string) => (
            <ul key={tech} className="ml-6 text-gray-400">
              <li>{tech}</li>
            </ul>
          ))}
        </div>
        <div>
          <h1 className="text-gray-300  font-bold text-2xl">Features</h1>
          {project?.data?.features?.map((feature: string) => (
            <ul key={feature} className="ml-6 text-gray-400">
              <li>{feature}</li>
            </ul>
          ))}
        </div>
        <div>
          <h1 className="text-gray-300  font-bold text-2xl">Github Links</h1>
          <ul className="text-white ml-6">
            <li>
              Client:
              <Link
                className="ml-3 hover:underline"
                href={project?.data?.githubRepo?.clientSite}
                target="_blank"
              >
                {project?.data?.githubRepo?.clientSite}
              </Link>
            </li>
            <li>
              Server:
              <Link
                className="ml-3 hover:underline"
                href={project?.data?.githubRepo?.backendSite}
                target="_blank"
              >
                {project?.data?.githubRepo?.backendSite}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-gray-300  font-bold text-2xl">Description</h1>
          <p className="text-gray-400 text-justify">
            {project?.data?.description}
          </p>
        </div>

        <p className="text-white">
          <span>
            {" "}
            <span className="text-red-500">*</span> Developers note:{" "}
          </span>{" "}
          {project?.data?.developerNotes}
        </p>
      </div>

      <div className="mt-6">
        <Link href={project?.data?.liveLink} target="_blank">
          <Button text="Live link" className="py-2 px-4 mt-2" />
        </Link>
      </div>
    </div>
  );
}
