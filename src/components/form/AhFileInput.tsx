import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Upload } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  className?: string;
};

export default function AhFileInput({
  name,
  label,
  disabled,
  className,
}: TInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field, fieldState }) => (
        <Form.Item
          label={label}
          validateStatus={fieldState.error ? "error" : ""}
          help={fieldState.error?.message}
        >
          <Upload
            beforeUpload={() => false} // prevent auto upload
            onChange={(info) => {
              const file = info.fileList[0]?.originFileObj || null;
              field.onChange(file); // store the file in React Hook Form
            }}
            maxCount={1} // allow only 1 file
            disabled={disabled}
            className={className}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
      )}
    />
  );
}
