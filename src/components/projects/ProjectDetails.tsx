import Spinner from "@/app/(commonLayout)/projects/loading";
import { TProjectDetails } from "@/types/project.types";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
type ProjectDtailsProps = {
  projectDetails: TProjectDetails;
};
export default function ProjectDetails({ projectDetails }: ProjectDtailsProps) {
  //   const {
  //     title,
  //     coverImage,
  //     shortDescription,
  //     technologies,
  //     categoryId,
  //     liveLink,
  //     contentId,
  //   }: TProjectDetails = projectDetails;
  return (
    <Suspense fallback={<Spinner />}>
      <div className="container mx-auto max-w-[90%] px-4 py-10 space-y-6">
        {/* Image Section */}
        <div className="w-full max-w-4xl mx-auto">
          {projectDetails?.coverImage && (
            <Image
              src={(projectDetails?.coverImage as string) || ""}
              width={500}
              height={300}
              alt={projectDetails?.title || ""}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="mt-4 space-y-6">
          <h2 className="space-x-4">
            <span className="text-5xl text-gray-300  font-bold ">
              {projectDetails?.title}
            </span>
            <span
              className="px-3 py-2 mb-4 text-sm font-medium text-purple-200 bg-gradient-to-r 
                 from-purple-700 to-purple-500 border border-purple-400 
                 rounded-lg shadow-md hover:shadow-lg hover:scale-105 
                 transition-all duration-200"
            >
              {projectDetails?.categoryId.categoryName}
            </span>
          </h2>

          <p className="text-gray-400 mt-1 text-justify">
            {projectDetails?.shortDescription}
          </p>

          <div>
            <h1 className="text-gray-300  font-bold text-2xl">Technologies</h1>
            {projectDetails?.technologies?.map((tech: string) => (
              <ol key={tech} className="ml-6 text-gray-400 list-disc">
                <li>{tech}</li>
              </ol>
            ))}
          </div>

          <div>
            <h1 className="text-gray-300  font-bold text-2xl">Description</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: projectDetails?.contentId.content,
              }}
            />
          </div>
        </div>

        <div className="mt-6">
          <Link href={projectDetails?.liveLink} target="_blank">
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
