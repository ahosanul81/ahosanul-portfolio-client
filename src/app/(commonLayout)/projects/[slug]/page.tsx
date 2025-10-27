import { project } from "@/services/project";
import { TProjectDetails } from "@/types/project.types";
import type { Metadata } from "next";
import ProjectDetails from "@/components/projects/ProjectDetails";

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

  return (
    <>
      <ProjectDetails projectDetails={projectDetails.data} />
    </>
  );
}
