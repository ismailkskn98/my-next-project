import React from "react";
import { useField } from "formik";
import classNames from "classnames";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="relative col-span-2 flex w-full flex-col items-start gap-2 sm:col-span-1">
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
        className={classNames(
          "block w-full rounded-md border px-[9px] py-2 text-sm focus:outline-none sm:px-3 sm:text-base",
          {
            "border-gray-300 focus:border-logoGold": !meta.error,
            "border-red-500 focus:border-red-700": meta.error && meta.touched,
          },
        )}
      />
      {meta.touched && meta.error ? (
        <div className="absolute right-1 top-2 px-1 text-xs text-red-500">
          *{meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default CustomInput;
