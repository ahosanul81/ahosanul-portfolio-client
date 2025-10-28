"use client";

import { Suspense, useState } from "react";
import Spinner from "@/app/(commonLayout)/projects/loading";
import AddCategory from "./AddCategory";
import AddTechs from "./AddTechs";

import TextEditor from "@/components/customComponent/editor/TextEditor";
import { project } from "@/services/project";
import { TAddProject } from "@/types/project.types";
import ReviewProject from "./ReviewProject";

import AddProjectInfo from "./AddProjectInfo";

export default function AddProjectPage() {
  const [addProjectInfo, setAddProjectInfo] = useState<TAddProject>();
  const [content, setContent] = useState<string>("");
  // console.log(addProjectInfo, content);

  const handleSubmit = async () => {
    const projectObj = {
      title: addProjectInfo?.title,
      coverImage: addProjectInfo?.coverImage,
      shortDescription: addProjectInfo?.shortDescription,
      technologies: addProjectInfo?.technologies,
      categoryId: addProjectInfo?.categoryId,
      liveLink: addProjectInfo?.liveLink,
      content: content,
    };
    // console.log(addProjectInfo?.coverImage[0].path);

    const projectData = await project.addProject(projectObj);
    console.log(projectData);
  };

  return (
    <Suspense fallback={<Spinner />}>
      <div className="bg-secondary-color mx-auto mt-3 py-5">
        {/* Review Project */}
        {addProjectInfo || content ? (
          <ReviewProject addProjectInfo={addProjectInfo} content={content} />
        ) : null}
        {/* add project */}
        <h1 className="text-white font-bold text-4xl text-center mb-4">
          Add Project
        </h1>

        <div className="flex items-center bg-white rounded-lg shadow-md">
          <AddCategory />
          <AddTechs />
        </div>
        <div className="mt-6">
          <AddProjectInfo setAddProjectInfo={setAddProjectInfo} />
          <TextEditor setContent={setContent} />
          <div className="flex justify-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-purple-400 text-white rounded-md px-4 py-2"
            >
              Submit Project
            </button>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
