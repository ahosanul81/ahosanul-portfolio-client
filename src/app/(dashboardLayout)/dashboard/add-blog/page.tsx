/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Form, Input, Select, SelectProps, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { toast } from "sonner";
import { sendImageCloudinary } from "@/utils/sendImageCloudinary";
import { TBlog } from "@/types/blog.types";

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
const options: SelectProps["options"] = [
  { value: "technology", label: "Technology" },
];

export default function AddBlogPage() {
  const [image, setImage] = useState(null);
  // const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  // const handleUploadChange: UploadProps["onChange"] = async ({ file }) => {
  //   setImageFile(file)
  // };
  const onFinish = async (values: any) => {
    console.log(values);

    if (values.blog.image) {
      const imageUrl = await sendImageCloudinary(values.blog.image.file);
      setImage(imageUrl);
    }

    setLoading(true);
    const blogData: TBlog = {
      title: values.blog.title,
      description: values.blog.description,
      category: values.blog.category,
    };
    if (image) {
      blogData.image = image;
    } else {
      blogData.image = "";
    }
    console.log(blogData);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/add-blog`,
      {
        method: "POST",
        body: JSON.stringify(blogData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    console.log(data);
    if (data?.status === 200) {
      console.log("Blog added successfully");
      setLoading(false);
      console.log(loading);
      toast("Blog added successfully");
    }
  };
  return (
    <div className="bg-secondary-color mx-auto mt-8 py-16">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: "auto" }}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["blog", "title"]}
          label={<span className="text-white font-semibold">Title</span>}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          initialValue={["technology"]}
          name={["blog", "category"]}
          label={<span className="text-white font-semibold">Categories</span>}
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
          name={["blog", "description"]}
          label={<span className="text-white font-semibold">Description</span>}
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Upload Image" name={["blog", "image"]}>
          <Upload
            action="YOUR_UPLOAD_URL_HERE"
            listType="picture"
            // onChange={handleUploadChange}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item label={null}>
          {/* <Button type="primary" htmlType="submit">
            Submit
          </Button> */}
          <Button type="primary" htmlType="submit" loading={loading}>
            Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
