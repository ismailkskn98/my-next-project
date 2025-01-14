"use client";

import React from "react";
import { Formik, Form } from "formik";
import CustomInput from "./components/CustomInput";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { Link, NavPaths } from "@/i18n/routing";
import FormTitle, { FormType } from "../common/FormTitle";
import CustomCheckbox from "./components/CustomCheckbox";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./registerPhoneNumber.css";
import classNames from "classnames";
import useRegisterSchema from "./useRegisterSchema";
import AuthFormTop from "../common/AuthFormTop";

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  kvkkAgreement: boolean;
  membershipAgreement: boolean;
};

const initialValues: RegisterFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  kvkkAgreement: false,
  membershipAgreement: false,
};

const Register: React.FC = () => {
  const t = useTranslations("Register");
  const validationSchema = useRegisterSchema();
  const locale = useLocale();
  console.log(locale);

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      console.log("Form values:", values);
      // API endpoint URL
      const response = await axios.post(
        "http://localhost:5002/api/auth/register", // API URL
        values,
      );

      // Başarılı yanıt geldiğinde
      alert("Kayıt başarılı!");
      console.log("Response:", response.data);
    } catch (error) {
      // Hata durumunda
      console.error("Kayıt hatası:", error);
      alert("Bir hata oluştu, lütfen tekrar deneyin.");
    }
  };

  return (
    <article className="relative mx-auto flex h-full w-full min-w-full basis-2/3 items-center justify-center overflow-x-hidden bg-left-top bg-no-repeat px-2 pt-5 sm:px-5 md:basis-1/2 lg:min-w-[720px] xl:min-w-[760px] xl:px-10">
      <AuthFormTop />
      <div className="drop-shadow-3xl absolute inset-x-0 top-0 block h-28 bg-authTopBg bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute bottom-0 right-0 h-11 w-11 rotate-[180deg] bg-loginBg bg-cover bg-center bg-no-repeat sm:h-32 sm:w-32"></div>
      <div className="relative z-10 flex w-full flex-col items-center gap-4 px-2 sm:gap-8 md:gap-10 md:px-4">
        <FormTitle title={t("title")} type={FormType.Register} />
        <div className="w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit} // Form submit edildiğinde bu fonksiyon çalışacak
          >
            {({
              isSubmitting,
              values,
              setFieldValue,
              errors,
              touched,
              setFieldTouched,
            }) => (
              <Form className="grid h-full w-full grid-cols-2 gap-y-3 sm:gap-x-7 sm:gap-y-6">
                <CustomInput
                  name="firstName"
                  label={t("form.firstname.label")}
                  type="text"
                  placeholder={t("form.firstname.placeholder")}
                />
                <CustomInput
                  name="lastName"
                  label={t("form.lastname.label")}
                  type="text"
                  placeholder={t("form.lastname.placeholder")}
                />
                <CustomInput
                  name="email"
                  label={t("form.email.label")}
                  type="email"
                  placeholder={t("form.email.placeholder")}
                />
                <div className="relative col-span-2 flex w-full flex-col items-start gap-2 sm:col-span-1">
                  <PhoneInput
                    country={"tr"}
                    specialLabel={t("form.phonenumber.label")}
                    value={values.phoneNumber}
                    onChange={(phone) => setFieldValue("phoneNumber", phone)}
                    onBlur={() => setFieldTouched("phoneNumber", true)}
                    buttonClass={classNames("", {
                      "!border-gray-300 !focus:border-logoGold":
                        !errors.phoneNumber,
                      "!border-red-500 !focus:border-red-700":
                        errors.phoneNumber && touched.phoneNumber,
                    })}
                    inputClass={classNames(
                      "block w-full rounded-md border px-[9px] py-2 text-sm focus:outline-none sm:px-3 sm:text-base",
                      {
                        "!border-gray-300 !focus:border-logoGold":
                          !errors.phoneNumber,
                        "!border-red-500 !focus:border-red-700":
                          errors.phoneNumber && touched.phoneNumber,
                      },
                    )}
                  />
                  {touched.phoneNumber && errors.phoneNumber ? (
                    <div className="absolute right-1 top-2 px-1 text-xs text-red-500">
                      *{errors.phoneNumber}
                    </div>
                  ) : null}
                </div>
                <CustomInput
                  name="password"
                  label={t("form.password.label")}
                  type="password"
                  placeholder="********"
                />
                <CustomInput
                  name="confirmPassword"
                  label={t("form.confirmPassword.label")}
                  type="password"
                  placeholder="********"
                />
                <CustomCheckbox
                  label="Okudum ve Onaylıyorum"
                  modalTitle="Üyelik Sözleşmesini"
                  input={{
                    name: "membershipAgreement",
                    id: "membershipAgreement",
                  }}
                />
                <CustomCheckbox
                  modalTitle="KVKK Aydınlatma Metnini"
                  label="Okudum ve Kabul Ediyorum"
                  input={{ name: "kvkkAgreement", id: "kvkkAgreement" }}
                />
                <div className="col-span-2 mt-2 flex w-full flex-col items-center justify-center gap-4 rounded sm:mt-5 sm:gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-min justify-center text-nowrap rounded-md border border-transparent bg-logoGold px-5 py-2 text-base font-medium capitalize text-white shadow-sm transition-all duration-200 hover:bg-[#d9a54e] focus:outline-none sm:px-6 lg:text-base"
                  >
                    {isSubmitting ? t("form.submitting") : t("form.submit")}
                  </button>
                  <Link
                    href={NavPaths.LOGIN}
                    className="hover-text-black mt-1 text-xs text-black/85 underline underline-offset-2 sm:text-sm"
                  >
                    {t("form.login")}
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </article>
  );
};

export default Register;
