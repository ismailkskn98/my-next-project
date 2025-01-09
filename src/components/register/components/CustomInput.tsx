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
    <div className="w-full">
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
      />
      {meta.touched && meta.error ? (
        <div className="mt-1 text-sm text-red-600">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
