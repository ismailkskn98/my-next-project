"use client";

import React from "react";
import { Formik, Form } from "formik";
import registerSchema from "./registerSchema";
import CustomInput from "./components/CustomInput";
import axios from "axios";
import { useTranslations } from "next-intl";
import { Link, NavPaths } from "@/i18n/routing";
import FormTitle from "../common/FormTitle";
import CustomCheckbox from "./components/CustomCheckbox";

export type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  // phoneNumber: string;
  kvkkAgreement: boolean;
  membershipAgreement: boolean;
};

const initialValues: RegisterFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  // phoneNumber: "",
  kvkkAgreement: false,
  membershipAgreement: false,
};

const Register: React.FC = () => {
  const t = useTranslations("Register");

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
    <article className="relative mx-auto flex h-full w-full min-w-full basis-2/3 items-center justify-center overflow-x-hidden bg-left-top bg-no-repeat px-2 sm:px-5 md:basis-1/2 lg:min-w-[720px] xl:min-w-[760px] xl:px-10">
      <div className="bg-authTopBg drop-shadow-3xl absolute inset-x-0 top-0 block h-28 bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute bottom-0 right-0 h-11 w-11 rotate-[180deg] bg-loginBg bg-cover bg-center bg-no-repeat sm:h-32 sm:w-32"></div>
      <div className="relative z-10 flex w-full flex-col items-center gap-6 px-2 sm:gap-8 md:gap-10 md:px-4">
        <FormTitle title={t("title")} />
        <div className="w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit} // Form submit edildiğinde bu fonksiyon çalışacak
          >
            {({ isSubmitting }) => (
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
                <CustomInput
                  label={t("form.phonenumber.label")}
                  name="phoneNumber"
                  type="text"
                  placeholder={t("form.phonenumber.placeholder")}
                />
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
                <div className="col-span-2 mt-2 flex w-full flex-col items-center justify-center gap-3 sm:mt-5 sm:gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-min justify-center text-nowrap rounded-md border border-transparent bg-logoGold px-4 py-[5px] text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#d9a54e] focus:outline-none sm:px-6 sm:py-2 lg:text-base"
                  >
                    {isSubmitting ? t("form.submitting") : t("form.submit")}
                  </button>
                  <Link
                    href={NavPaths.REGISTER}
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
