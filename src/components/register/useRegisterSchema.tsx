import { useTranslations } from "next-intl";
import * as Yup from "yup";

export default function useRegisterSchema() {
  const t = useTranslations("Register");

  return Yup.object().shape({
    firstName: Yup.string()
      .min(2, t("validation.firstname.minLength"))
      .max(50, t("validation.firstname.maxLength"))
      .required(t("validation.firstname.required")),
    lastName: Yup.string()
      .min(2, t("validation.lastname.minLength"))
      .max(50, t("validation.lastname.maxLength"))
      .required(t("validation.lastname.required")),
    email: Yup.string()
      .email(t("validation.email.invalid"))
      .required(t("validation.email.required")),
    password: Yup.string()
      .min(8, t("validation.password.minLength"))
      .matches(/[A-Z]/, t("validation.password.uppercase"))
      .matches(/[a-z]/, t("validation.password.lowercase"))
      .matches(/\d/, t("validation.password.number"))
      .required(t("validation.password.required")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("validation.confirmPassword.match"))
      .required(t("validation.confirmPassword.required")),
    phoneNumber: Yup.string()
      .min(5, t("validation.phoneNumber.minLength"))
      .matches(/^\+?[1-9]\d{1,14}$/, t("validation.phoneNumber.invalid"))
      .required(t("validation.phoneNumber.required")),
    kvkkAgreement: Yup.boolean()
      .oneOf([true], t("validation.agreements.kvkk"))
      .required(t("validation.agreements.kvkk")),
    membershipAgreement: Yup.boolean()
      .oneOf([true], t("validation.agreements.membership"))
      .required(t("validation.agreements.membership")),
  });
}
