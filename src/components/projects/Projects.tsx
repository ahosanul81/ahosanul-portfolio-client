import { TProject } from "@/types/project.types";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import Animate from "../customComponent/Animate";
import Spinner from "@/app/(commonLayout)/projects/loading";

export default async function Projects({ projects }: { projects: TProject[] }) {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 ">
          {Array.isArray(projects) &&
            projects?.map((project: TProject, index: number) => (
              <Animate
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut",
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <button
                        className="px-3 py-1 text-sm font-medium text-purple-200 bg-gradient-to-r 
                 from-purple-700 to-purple-500 border border-purple-400 
                 rounded-lg shadow-md hover:shadow-lg hover:scale-105 
                 transition-all duration-200"
                      >
                        {project?.categoryId?.categoryName || ""}
                      </button>
                      <p>{project.shortDescription}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {Array.isArray(project?.technologies) &&
                        project?.technologies?.map(
                          (tech: string, index: number) => (
                            <button
                              key={index}
                              className="px-2 bg-green-600 rounded-lg text-white capitalize"
                            >
                              {tech}
                            </button>
                          )
                        )}
                    </div>

                    <div className="flex items-center gap-5">
                      <Link href={project.liveLink} target="_blank">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                          Live Site View
                        </button>
                      </Link>
                      <Link href={`/projects/${project.slug}`}>
                        <button
                          type="button"
                          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                        >
                          Project Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Animate>
            ))}
        </div>
      </div>
    </Suspense>
  );
}
