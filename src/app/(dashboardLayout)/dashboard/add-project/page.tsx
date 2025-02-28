/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Button,
  Form,
  Input,
  Select,
  SelectProps,
  Upload,
  UploadProps,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { toast } from "sonner";
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
  const [imageFile, setImageFile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const options: SelectProps["options"] = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "react", label: "React" },
    { value: "javascript", label: "JavaScript" },
    { value: "next.js", label: "Next.js" },
    { value: "mongodb", label: "MongoDB" },
  ];
  const handleUploadChange: UploadProps["onChange"] = ({ file }) => {
    // console.log(file);

    setImageFile(file);
  };
  const onFinish = async (values: any) => {
    console.log(values);

    setLoading(true);
    const formData = new FormData();

    if (imageFile) {
      formData.append("file", imageFile.originFileObj);
    }
    formData.append("projectData", JSON.stringify(values.project));

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/projects/add-project`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();

    console.log(data);
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
        Add Project{" "}
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
          rules={[{ required: true }]}
        >
          <Upload
            // action="YOUR_UPLOAD_URL_HERE"
            listType="picture"
            onChange={handleUploadChange}
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
