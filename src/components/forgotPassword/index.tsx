"use client";
import React from "react";
import { Form, Formik } from "formik";
import { useTranslations } from "next-intl";
import { Link, NavPaths } from "@/i18n/routing";
import CustomInput from "../login/components/CustomInput";
import handleSubmitForgotPassword from "./handleSubmitForgotPassword";
import FormTitle, { FormType } from "../common/FormTitle";
import useForgotSchema from "./useForgotSchema";
import AuthFormTop from "../common/AuthFormTop";

export type ForgotPasswordFormValues = {
  email: string;
};

const initialValues: ForgotPasswordFormValues = {
  email: "",
};

export default function ForgotPassword() {
  const t = useTranslations("ForgotPassword");
  const validationSchema = useForgotSchema();
  return (
    <article className="relative flex h-full w-full items-center justify-center overflow-x-hidden bg-left-top bg-no-repeat px-4 pt-5 lg:basis-2/5">
      <AuthFormTop />
      <div className="drop-shadow-3xl absolute inset-x-0 top-0 block h-28 bg-authTopBg bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute bottom-0 right-0 h-24 w-24 rotate-[180deg] bg-loginBg bg-cover bg-center bg-no-repeat sm:h-32 sm:w-32"></div>
      <div className="flex w-full min-w-[full] max-w-[417px] flex-col items-center gap-10 sm:min-w-[400px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <FormTitle title={t("title")} type={FormType.ForgotPassword} />
          <p className="px-4 text-center text-sm">{t("subtitle")}</p>
        </div>
        <div className="w-full">
          <div className="w-full">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmitForgotPassword}
            >
              {({ isSubmitting }) => (
                <Form className="flex w-full flex-col items-start gap-7">
                  <CustomInput
                    label={t("form.email.label")}
                    name="email"
                    type="email"
                    placeholder={t("form.email.placeholder")}
                  />
                  <div className="flex w-full flex-col items-center justify-center gap-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-min justify-center text-nowrap rounded-md border border-transparent bg-logoGold px-6 py-2 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#d9a54e] focus:outline-none lg:text-base"
                    >
                      {isSubmitting ? t("form.submitting") : t("form.submit")}
                    </button>
                    <div className="flex items-center gap-6">
                      <Link
                        href={NavPaths.LOGIN}
                        className="hover-text-black text-nowrap text-sm text-black/85 underline underline-offset-4"
                      >
                        {t("form.login")}
                      </Link>
                      <Link
                        href={NavPaths.REGISTER}
                        className="hover-text-black text-nowrap text-sm text-black/85 underline underline-offset-4"
                      >
                        {t("form.register")}
                      </Link>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </article>
  );
}
