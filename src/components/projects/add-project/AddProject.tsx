/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Suspense, useState } from "react";
import Spinner from "@/app/(commonLayout)/projects/loading";
import AddCategory from "./AddCategory";
import AddTechs from "./AddTechs";
import AddProjectInfo from "./AddProjectInfo";
import TextEditor from "@/components/customComponent/editor/TextEditor";
import { project } from "@/services/project";

export default function AddProjectPage() {
  const [addProjectInfo, setAddProjectInfo] = useState<{
    title: string;
    coverImage: File;
    shortDescription: string;
    technologies: string;
    categoryId: string;
    liveLink: string;
  }>();
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
        <h1 className="text-white font-bold text-4xl text-center mb-4">
          Add Project
        </h1>

        <div className="flex items-center bg-white rounded-lg shadow-md">
          <AddCategory />
          <AddTechs />
        </div>
        <div className="mt-6">
          {/* <Form
            {...layout}
            name="nest-messages"
            // onFinish={onFinish}
            style={{ maxWidth: 600, margin: "auto" }}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["project", "projectName"]}
              label={
                <span className="text-white font-semibold">Project Name</span>
              }
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              initialValue={["html", "css", "javascript"]}
              name={["project", "technologies"]}
              label={
                <span className="text-white font-semibold">Technologies</span>
              }
              rules={[{ required: true }]}
            >
              <Select
                mode="multiple"
                //   size={size}
                placeholder="Please select"
                //   onChange={handleChange}
                style={{ width: "100%" }}
                // options={options}
              >
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Form> */}
          <AddProjectInfo setAddProjectInfo={setAddProjectInfo} />
          <TextEditor setContent={setContent} />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </Suspense>
  );
}
