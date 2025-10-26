import { Form, Select } from "antd";
import { Controller, useFormContext, useWatch } from "react-hook-form";
export type TOptions = { value: string; label: string; disabled?: boolean };
type TLabel = {
  label?: string;
  name: string;
  className: string;
  options: TOptions[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
};
export default function AhSelect({
  label,
  name,
  className,
  options,
  disabled,
  mode,
}: TLabel) {
  const { control } = useFormContext();
  const inputValue = useWatch({
    control,
    name,
  });
  console.log(inputValue);

  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
            className={className}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {fieldState.error && (
            <small style={{ color: "red" }}>{fieldState.error.message}</small>
          )}
        </Form.Item>
      )}
    />
  );
}
