import { Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TTextareaProps = {
  name: string;
  label?: string;
  disabled?: boolean;
};

export default function AhTextArea({ name, label, disabled }: TTextareaProps) {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Form.Item label={label}>
            <textarea
              {...field}
              id={name}
              disabled={disabled}
              className="w-full border rounded-md p-2"
            />
          </Form.Item>
        )}
      />
    </div>
  );
}
