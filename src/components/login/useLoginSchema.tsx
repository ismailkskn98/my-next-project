import { useTranslations } from "next-intl";
import * as Yup from "yup";

export default function useLoginSchema() {
  const t = useTranslations("Login");

  return Yup.object().shape({
    email: Yup.string()
      .email(t("validation.email.invalid"))
      .required(t("validation.email.required")),
    password: Yup.string()
      .min(8, t("validation.password.minLength"))
      .required(t("validation.password.required")),
  });
}
