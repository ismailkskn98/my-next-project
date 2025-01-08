import { useField } from "formik";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export function CustomInput({ label, ...props }: CustomInputProps) {
  const [field, meta] = useField(props);
  return (
    <div className="w-full">
      <Label
        htmlFor={props.name}
        className="mb-1 block text-sm font-medium text-gray-200"
      >
        {label}
      </Label>
      <Input
        {...field}
        {...props}
        className="w-full flex-1 border-black/70 bg-black/40 text-white"
      />
      {meta.touched && meta.error ? (
        <div className="mt-1 text-xs text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}
