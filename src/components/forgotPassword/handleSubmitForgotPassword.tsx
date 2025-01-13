import type { FormikHelpers } from "formik";
import type { ForgotPasswordFormValues } from ".";

export default async function handleSubmitForgotPassword(
  values: ForgotPasswordFormValues,
  actions: FormikHelpers<ForgotPasswordFormValues>,
) {
  console.log(values, actions);
}
