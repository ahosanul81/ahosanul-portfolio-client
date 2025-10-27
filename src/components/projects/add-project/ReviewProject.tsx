"use client";

import { TAddProject, TProjectDetails } from "@/types/project.types";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProjectDetails from "../ProjectDetails";
// import React from "react";

type TReviewProjectProps = {
  addProjectInfo: TAddProject | undefined;
  content: string;
};

export default function ReviewProject({
  addProjectInfo,
  content,
}: TReviewProjectProps) {
  console.log({ ...addProjectInfo, content });
  const [previewImage, setPreviewCover] = useState<string | null>(null);

  useEffect(() => {
    if (addProjectInfo?.coverImage && addProjectInfo.coverImage[0]) {
      const file = addProjectInfo.coverImage[0];
      const objectUrl = URL.createObjectURL(file);
      setPreviewCover(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [addProjectInfo?.coverImage]);

  const projectDetails: TProjectDetails = {
    _id: "",
    title: addProjectInfo?.title as string,
    slug: "",
    coverImage: previewImage as string,
    shortDescription: addProjectInfo?.shortDescription as string,
    technologies: addProjectInfo?.technologies.split(",") as string[],
    categoryId: {
      _id: "12",
      categoryName: "",
      createdAt: "",
      updatedAt: "",
      __v: 7,
    },
    liveLink: addProjectInfo?.liveLink as string,
    contentId: { _id: "12", content: content },
  };
  console.log(projectDetails);
  return (
    <div>
      {(addProjectInfo || content) && (
        <h1 className="text-white font-bold text-4xl text-center mb-4">
          Review Project
        </h1>
      )}

      <ProjectDetails projectDetails={projectDetails} />
    </div>
  );
}
