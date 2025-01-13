"use client";
import React from "react";
import { Form, Formik } from "formik";
import { useTranslations } from "next-intl";
import { Link, NavPaths } from "@/i18n/routing";
import CustomInput from "../login/components/CustomInput";
import forgotSchema from "./forgotSchema";
import handleSubmitForgotPassword from "./handleSubmitForgotPassword";
import FormTitle from "../common/FormTitle";

export type ForgotPasswordFormValues = {
  email: string;
};

const initialValues: ForgotPasswordFormValues = {
  email: "",
};

export default function ForgotPassword() {
  const t = useTranslations("ForgotPassword");
  return (
    <article className="relative flex h-full w-full items-center justify-center overflow-x-hidden bg-left-top bg-no-repeat px-4 md:basis-2/5">
      <div className="absolute bottom-0 right-0 h-24 w-24 rotate-[180deg] bg-loginBg bg-cover bg-center bg-no-repeat sm:h-32 sm:w-32"></div>
      <div className="absolute bottom-0 right-0 h-11 w-11 rotate-[180deg] bg-loginBg bg-cover bg-center bg-no-repeat sm:h-32 sm:w-32"></div>
      <div className="z-10flex relative w-full min-w-[full] max-w-[417px] flex-col items-center gap-10 sm:min-w-[400px]">
        <div className="flex flex-col items-center justify-center gap-5">
          <FormTitle title={t("title")} />
          <p className="px-4 text-center text-sm">{t("subtitle")}</p>
        </div>
        <div className="w-full">
          <div className="w-full">
            <Formik
              initialValues={initialValues}
              validationSchema={forgotSchema}
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
                  <div className="flex w-full flex-col items-center justify-center gap-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-min justify-center text-nowrap rounded-md border border-transparent bg-logoGold px-6 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#d9a54e] focus:outline-none lg:text-base"
                    >
                      {isSubmitting ? t("form.submitting") : t("form.submit")}
                    </button>
                    <Link
                      href={NavPaths.LOGIN}
                      className="hover-text-black text-nowrap text-sm text-black/85 underline underline-offset-2"
                    >
                      {t("form.login")}
                    </Link>
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
