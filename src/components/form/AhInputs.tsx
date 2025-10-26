import { Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder: string;
  className?: string;
};

export default function AhInputs({
  type,
  name,
  label,
  disabled,
  placeholder,
  className,
}: TInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState }) => (
        <Form.Item
          label={label}
          validateStatus={fieldState.error ? "error" : ""}
          help={fieldState.error?.message}
        >
          <input
            {...field}
            type={type}
            id={name}
            disabled={disabled}
            placeholder={placeholder}
            className={className}
          />
        </Form.Item>
      )}
    />
  );
}
