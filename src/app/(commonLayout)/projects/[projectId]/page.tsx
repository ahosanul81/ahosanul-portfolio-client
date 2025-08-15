import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Spinner from "../loading";

export default async function SingleProject({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${projectId}`
  );
  const project = await res.json();

  return (
    <Suspense fallback={<Spinner />}>
      <div className="container mx-auto max-w-[90%] px-4 py-10 space-y-6">
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
          <p className="text-gray-400 mt-4 text-justify">
            {project?.data?.idea}
          </p>

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

            <h3 className="text-wrap text-white">
              Client:
              <Link
                className="ml-3 hover:underline"
                href={project?.data?.githubRepo?.clientSite}
                target="_blank"
              >
                {project?.data?.githubRepo?.clientSite}
              </Link>
            </h3>
            <h3 className="text-wrap text-white">
              Server:
              <Link
                className="ml-3 hover:underline"
                href={project?.data?.githubRepo?.backendSite}
                target="_blank"
              >
                {project?.data?.githubRepo?.backendSite}
              </Link>
            </h3>
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
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Live Site View
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
