"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CustomInput } from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import { useTranslations } from "next-intl";
import handleSubmitContact from "./handleSubmit";

export type InitialValuesType = {
  name: string;
  email: string;
  message: string;
};

const initialValues: InitialValuesType = { name: "", email: "", message: "" };

export default function ContactMain() {
  const t = useTranslations("Contact");

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, t("validation.name.minLength"))
      .required(t("validation.name.required")),
    email: Yup.string()
      .email(t("validation.email.invalid"))
      .required(t("validation.email.required")),
    message: Yup.string()
      .required(t("validation.message.required"))
      .min(10, t("validation.message.minLength")),
  });

  return (
    <div className="text-whie flex w-full items-center justify-center">
      <Card className="w-full border-none bg-transparent shadow-none outline-none ring-0">
        <CardHeader>
          <CardTitle className="mx-auto mb-6 w-full max-w-[800px] text-center font-raleway text-4xl font-bold capitalize text-white lg:text-start">
            {t("form.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={(values, actions) =>
              handleSubmitContact(
                values,
                actions,
                t("successMessage"),
                t("errorMessage"),
              )
            }
          >
            {({ isSubmitting }) => (
              <Form className="mx-auto flex w-full flex-col items-start gap-8 px-0 md:max-w-[800px]">
                <div className="flex w-full flex-col items-start gap-5 md:flex-row md:items-center">
                  <CustomInput
                    name="name"
                    id="name"
                    label={t("form.name.label")}
                    placeholder={t("form.name.placeholder")}
                  />
                  <CustomInput
                    name="email"
                    id="email"
                    label={t("form.email.label")}
                    type="email"
                    placeholder={t("form.email.placeholder")}
                  />
                </div>
                <CustomTextarea
                  label={t("form.message.label")}
                  input={{
                    name: "message",
                    placeholder: t("form.message.placeholder"),
                    id: "message",
                  }}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="self-end rounded bg-white/20 px-8 py-6 font-bold text-white transition duration-300 hover:bg-white/10"
                >
                  {isSubmitting
                    ? t("form.contactButton.submitting")
                    : t("form.contactButton.submit")}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
