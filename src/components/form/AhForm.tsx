"use client"; // keep this if you’re in Next.js App Router

import { Form } from "antd";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";

type TFormProps = {
  onSubmit: (data: FieldValues) => void;
  children: ReactNode;
} & UseFormProps<FieldValues>;

export default function AhForm({
  onSubmit,
  children,
  defaultValues,
  resolver,
  ...rest
}: TFormProps) {
  const methods = useForm<FieldValues>({
    defaultValues,
    resolver,
    ...rest, // in case you pass extra RHF options like mode, reValidateMode etc.
  });

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
}
