import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
type TDatePickerProps = {
  name: string;
  label?: string;
};
export default function AhDatePicker({ name, label }: TDatePickerProps) {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large"></DatePicker>
          </Form.Item>
        )}
      ></Controller>
    </div>
  );
}
