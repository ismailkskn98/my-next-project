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
    <div className="flex min-h-[117px] w-full flex-col gap-2">
      <Label
        htmlFor={props.name}
        className="block text-base font-medium text-gray-200"
      >
        {label}
      </Label>
      <Input
        {...field}
        {...props}
        className="h-min max-h-14 w-full flex-1 border-black/70 bg-white/10 px-3 py-4 text-white"
      />
      {meta.touched && meta.error ? (
        <div className="mt-1 text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}
