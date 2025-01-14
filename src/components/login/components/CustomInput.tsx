import React from "react";
import { useField } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <label
        htmlFor={props.name}
        className="ml-1 block text-sm font-medium text-black"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        autoComplete={props.type === "password" ? "new-password" : "of"}
        className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-logoGold focus:outline-none"
      />
      {meta.touched && meta.error ? (
        <div className="px-1 text-xs text-red-600">*{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
