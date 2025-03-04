"use client";
import Button from "@/components/customComponent/Button";
import { useGetAllProjectsQuery } from "@/redux/features/project/projectApi";
import { TProject } from "@/types/project.types";
import Image from "next/image";
import Link from "next/link";
import Spinner from "./loading";

export default function ProjectPage() {
  const { data: projects, isLoading } = useGetAllProjectsQuery(undefined);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto px-4 py-10">
      {/* <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects?.data?.map((project: TProject, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            {project.homePageImg && (
              <Image
                src={project.homePageImg}
                alt={project.projectName}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.projectName}</h3>
              <p className="text-gray-600">{project.idea}</p>
              <div className="flex items-center gap-5">
                <Link href={project.liveLink} target="_blank">
                  <Button text="Project Live Link" className=" px-4 mt-2" />
                </Link>
                <Link href={`/projects/${project._id}`}>
                  <Button text="Project Details" className=" px-4 mt-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
