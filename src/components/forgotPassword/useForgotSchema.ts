import { useTranslations } from "next-intl";
import * as Yup from "yup";

export default function useForgotSchema() {
  const t = useTranslations("ForgotPassword");

  return Yup.object().shape({
    email: Yup.string()
      .email(t("validation.email.invalid"))
      .required(t("validation.email.required")),
  });
}
