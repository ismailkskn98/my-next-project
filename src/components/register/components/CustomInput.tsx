import React from "react";
import { useField } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="col-span-2 flex w-full flex-col items-start gap-2 sm:col-span-1">
      <label
        htmlFor={props.name}
        className="block text-xs font-medium text-black sm:text-sm"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        autoComplete={props.type === "password" ? "new-password" : "of"}
        className="block w-full rounded-md border border-gray-300 px-[9px] py-[5px] text-sm focus:border-logoGold focus:outline-none sm:px-3 sm:py-2 sm:text-base"
      />
      {meta.touched && meta.error ? (
        <div className="px-1 text-xs text-red-600">*{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
