import React, { type HTMLAttributes } from "react";
import { useField } from "formik";
import classNames from "classnames";
import { GiCheckMark } from "react-icons/gi";
import KVKModal from "./KVKModal";

export type CustomCheckboxProps = {
  label: string;
  input: HTMLAttributes<HTMLInputElement> & { name: string };
  modalTitle: string;
};

export default function CustomCheckbox({
  label,
  input,
  modalTitle,
}: CustomCheckboxProps) {
  const [field, meta, helpers] = useField(input.name);
  console.log(field);
  return (
    <label
      htmlFor={input.id}
      className="col-span-2 flex cursor-pointer items-center gap-2 text-xs text-gray-700 md:col-span-1"
    >
      <button
        type="button"
        onClick={() => helpers.setValue(!field.value)}
        className={classNames(
          "pointer-events-none flex h-5 min-h-5 w-5 min-w-5 items-center justify-center rounded border p-1 transition-all duration-200",
          {
            "border-logoGold text-transparent": !field.value,
            "border-logoGold bg-logoGold text-white": field.value,
            "border-red-600": meta.error && meta.touched,
          },
        )}
      >
        {field.value && <GiCheckMark size={17} />}
      </button>
      <input {...field} {...input} type="checkbox" className="hidden" />
      <div
        className={classNames(
          "flex items-center gap-1 text-[10px] mobileL:text-xs",
          {
            "text-xs text-red-600": meta.error && meta.touched,
          },
        )}
      >
        <KVKModal modalTitle={modalTitle} />
        <p className="text-nowrap">{label}</p>
      </div>
    </label>
  );
}
