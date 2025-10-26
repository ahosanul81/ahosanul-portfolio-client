/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
export type TOptions = { value: string; label: string; disabled?: boolean };
type TLabel = {
  label: string;
  name: string;
  options: TOptions[] | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
  onValueChange?: (value: any) => void;
};
export default function AhSelectWithWatch({
  label,
  name,
  options,
  disabled,
  mode,
  onValueChange,
}: TLabel) {
  const { control } = useFormContext();
  const inputValue = useWatch({
    control,
    name,
  });
  useEffect(() => {
    if (onValueChange) {
      onValueChange(inputValue);
    }
  }, [inputValue, onValueChange]);

  return (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
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
