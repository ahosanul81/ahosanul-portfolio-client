/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Form, Input } from "antd";
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

const onFinish = (values: any) => {
  console.log(values);
};

export default function ContactPage() {
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
          name={["user", "name"]}
          label={<span className="text-white font-semibold">Name</span>}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label={<span className="text-white font-semibold">Email</span>}
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["user", "message"]}
          label={<span className="text-white font-semibold">Message</span>}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
