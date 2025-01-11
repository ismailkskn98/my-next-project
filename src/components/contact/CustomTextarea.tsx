import React, { TextareaHTMLAttributes } from "react";
import { useField } from "formik";
import { Textarea } from "../ui/textarea";

type CustomTextareaProps = {
  label: string;
  input: TextareaHTMLAttributes<HTMLTextAreaElement> & { name: string };
};

export default function CustomTextarea({ label, input }: CustomTextareaProps) {
  const [field, meta] = useField(input.name);
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={input.id || input.name}
        className="mb-1 block text-base font-medium text-gray-200"
      >
        {label}
      </label>
      <Textarea
        {...input}
        {...field}
        className="h-40 w-full resize-none border-none bg-white/20 px-3 py-4 text-base tracking-wide text-white placeholder:text-white/60"
      />
      {meta.touched && meta.error ? (
        <div className="mt-1 text-sm text-red-500">*{meta.error}</div>
      ) : null}
    </div>
  );
}
