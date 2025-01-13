"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Formik, Form, type FormikHelpers } from "formik";
import { Link, NavPaths } from "@/i18n/routing";
import loginSchema from "./loginSchema";
import handleSubmitLogin from "./handleSubmit";
import CustomInput from "./components/CustomInput";
import FormTitle from "../common/FormTitle";

export type LoginFormValues = {
  email: string;
  password: string;
};

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const t = useTranslations("Login");
  return (
    <article className="relative flex h-full w-full items-center justify-center overflow-x-hidden bg-left-top bg-no-repeat px-8 lg:basis-2/5">
      <div className="absolute bottom-0 right-0 h-24 w-24 rotate-[180deg] bg-loginBg bg-cover bg-center bg-no-repeat sm:h-32 sm:w-32"></div>
      <div className="flex w-full min-w-[full] max-w-[417px] flex-col items-center gap-10 sm:min-w-[400px]">
        <FormTitle title={t("title")} />
        <div className="w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={(
              values: LoginFormValues,
              actions: FormikHelpers<LoginFormValues>,
            ) =>
              handleSubmitLogin(
                values,
                actions,
                t("successMessage"),
                t("errorMessage"),
              )
            }
          >
            {({ isSubmitting }) => (
              <Form className="flex w-full flex-col items-start gap-7">
                <CustomInput
                  name="email"
                  label={t("form.email.label")}
                  type="email"
                  placeholder={t("form.email.placeholder")}
                />
                <CustomInput
                  name="password"
                  label={t("form.password.label")}
                  type="password"
                  placeholder="********"
                />
                <div className="flex w-full flex-col items-center justify-center gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-min justify-center text-nowrap rounded-md border border-transparent bg-logoGold px-6 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#d9a54e] focus:outline-none lg:text-base"
                  >
                    {isSubmitting ? t("form.submitting") : t("form.submit")}
                  </button>
                  <Link
                    href={NavPaths.REGISTER}
                    className="hover-text-black text-xs text-black/85 underline underline-offset-2 sm:text-sm"
                  >
                    {t("form.register")}
                  </Link>
                  <Link
                    href={NavPaths.FORGOTPASSWORD}
                    className="hover-text-black text-xs text-black/85 underline underline-offset-2 sm:text-sm"
                  >
                    {t("form.forgotPassword")}
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </article>
  );
}
