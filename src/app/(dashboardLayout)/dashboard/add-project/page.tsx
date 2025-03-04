/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Form, Input, Select, SelectProps, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { toast } from "sonner";
import { TProjectDetails } from "@/types/project.types";
import { sendImageCloudinary } from "@/utils/sendImageCloudinary";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

export default function AddProjectPage() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const options: SelectProps["options"] = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "react", label: "React" },
    { value: "javascript", label: "JavaScript" },
    { value: "next.js", label: "Next.js" },
    { value: "mongodb", label: "MongoDB" },
  ];

  const onFinish = async (values: any) => {
    setLoading(true);

    if (values.project.homePageImg) {
      const imageUrl = await sendImageCloudinary(
        values.project.homePageImg.file
      );
      setImage(imageUrl);
    }

    setLoading(true);
    const projectData: TProjectDetails = {
      projectName: values.project.projectName,
      idea: values.project.idea,
      homePageImg: values.project.homePageImg,
      technologies: values.project.technologies,
      features: values.project.features,
      githubRepo: {
        clientSite: values.project.clientSite,
        backendSite: values.project.backendSite,
      },
      liveLink: values.project.liveLink,
      developerNotes: values.project.developerNotes,
      description: values.project.description,
    };
    if (image) {
      projectData.homePageImg = image;
    } else {
      projectData.homePageImg = "";
    }
    console.log(projectData);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/add-project`,
      {
        method: "POST",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data?.status === 200) {
      console.log("Project added successfully");
      setLoading(false);
      console.log(loading);
      toast("Project added successfully");
    }
  };
  return (
    <div className="bg-secondary-color mx-auto mt-3 py-5">
      <h1 className="text-white font-bold text-4xl text-center mb-4">
        Add Project
      </h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "auto" }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["project", "projectName"]}
          label={<span className="text-white font-semibold">Project Name</span>}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          initialValue={["html", "css", "javascript"]}
          name={["project", "technologies"]}
          label={<span className="text-white font-semibold">Technologies</span>}
          rules={[{ required: true }]}
        >
          <Select
            mode="multiple"
            //   size={size}
            placeholder="Please select"
            //   onChange={handleChange}
            style={{ width: "100%" }}
            options={options}
          >
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name={["project", "features"]}
          label={<span className="text-white font-semibold">Features</span>}
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name={["project", "clientSite"]}
          label={
            <span className="text-white font-semibold">Client Site Link</span>
          }
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["project", "backendSite"]}
          label={
            <span className="text-white font-semibold">Server Site Link</span>
          }
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["project", "liveLink"]}
          label={<span className="text-white font-semibold">liveLink</span>}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["project", "description"]}
          label={<span className="text-white font-semibold">Description</span>}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["project", "developerNotes"]}
          label={
            <span className="text-white font-semibold">Developer Notes</span>
          }
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <span className="text-white font-semibold">
              Home Page Screenshot
            </span>
          }
          name={["project", "homePageImg"]}
        >
          <Upload
            // action="YOUR_UPLOAD_URL_HERE"
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
