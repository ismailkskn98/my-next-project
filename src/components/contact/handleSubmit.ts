import { FormikHelpers } from "formik";
import { InitialValuesType } from "./ContactMain";
import { toast } from "sonner";

export default async function handleSubmitContact(
  values: InitialValuesType,
  actions: FormikHelpers<InitialValuesType>,
  successMessage: string,
  errorMessage: string,
) {
  try {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success(successMessage);
    actions.resetForm();
  } catch {
    toast.error(errorMessage);
  } finally {
    actions.setSubmitting(false);
  }
}
