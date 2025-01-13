import type { FormikHelpers } from "formik";
import type { LoginFormValues } from ".";
import { toast } from "sonner";

export default async function handleSubmitLogin(
  values: LoginFormValues,
  actions: FormikHelpers<LoginFormValues>,
  succcesMessage: string,
  errorMessage: string,
) {
  console.log(values, actions, succcesMessage, errorMessage);
  try {
    throw new Error("sadsa");
  } catch (error) {
    console.log(error);
    toast.error(errorMessage);
  }
}
