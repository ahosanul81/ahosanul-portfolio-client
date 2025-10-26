import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Spinner from "../loading";
import { project } from "@/services/project";
import { TProjectDetails } from "@/types/project.types";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const projectDetail = await project.getProjectDetails(slug);
  const { title, coverImage, shortDescription }: TProjectDetails =
    projectDetail.data;
  if (!projectDetail?.data) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: title,
    description: shortDescription,
    openGraph: {
      title: title,
      description: shortDescription,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug}`,
      images: [
        {
          url: coverImage as string,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      siteName: "Md Ahosanul Islam Portfolio",
    },
  };
}
export default async function SingleProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectDetails = await project.getProjectDetails(slug);

  const {
    title,
    coverImage,
    shortDescription,
    technologies,
    categoryId,
    liveLink,
    contentId,
  }: TProjectDetails = projectDetails.data;

  return (
    <Suspense fallback={<Spinner />}>
      <div className="container mx-auto max-w-[90%] px-4 py-10 space-y-6">
        {/* Image Section */}
        <div className="w-full max-w-4xl mx-auto">
          {coverImage && (
            <Image
              src={coverImage as string}
              width={500}
              height={300}
              alt={title || ""}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="mt-4 space-y-6">
          <h2 className="space-x-4">
            <span className="text-5xl text-gray-300  font-bold ">{title}</span>
            <span
              className="px-3 py-2 mb-4 text-sm font-medium text-purple-200 bg-gradient-to-r 
                 from-purple-700 to-purple-500 border border-purple-400 
                 rounded-lg shadow-md hover:shadow-lg hover:scale-105 
                 transition-all duration-200"
            >
              {categoryId.categoryName}
            </span>
          </h2>

          <p className="text-gray-400 mt-1 text-justify">{shortDescription}</p>

          <div>
            <h1 className="text-gray-300  font-bold text-2xl">Technologies</h1>
            {technologies?.map((tech: string) => (
              <ol key={tech} className="ml-6 text-gray-400 list-disc">
                <li>{tech}</li>
              </ol>
            ))}
          </div>

          <div>
            <h1 className="text-gray-300  font-bold text-2xl">Description</h1>
            <div dangerouslySetInnerHTML={{ __html: contentId.content }} />
          </div>
        </div>

        <div className="mt-6">
          <Link href={liveLink} target="_blank">
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
