"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { toast } from "sonner";
import { CustomInput } from "./CustomInput";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("İsim gerekli"),
  email: Yup.string()
    .email("Geçerli bir e-posta adresi girin")
    .required("E-posta gerekli"),
  message: Yup.string()
    .required("Mesaj gerekli")
    .min(10, "Mesaj en az 10 karakter olmalı"),
});

export default function ContactMain() {
  const handleSubmit = async (
    values: { name: string; email: string; message: string },
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      // Burada normalde bir API çağrısı yapılır
      await new Promise((resolve) => setTimeout(resolve, 1000)); // API çağrısını simüle ediyoruz
      toast.success("Mesajınız başarıyla gönderildi!");
      resetForm();
    } catch {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="text-whie flex w-full items-center justify-center p-4">
      <Card className="w-full border-none bg-transparent shadow-none outline-none ring-0">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            İletişim
          </CardTitle>
          <CardDescription className="text-center text-gray-400">
            Bize ulaşın
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="mx-auto flex w-full max-w-[600px] flex-col items-start gap-5">
                <div className="flex w-full items-center gap-3">
                  <CustomInput name="name" label="İsim" placeholder="Adınız" />
                  <CustomInput
                    name="email"
                    label="E-posta"
                    type="email"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-200"
                  >
                    Mesaj
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Mesajınız..."
                    className="w-full border-gray-600 bg-black/40 text-white focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.message && touched.message ? (
                    <div className="mt-1 text-xs text-red-500">
                      {errors.message}
                    </div>
                  ) : null}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded px-4 py-2 font-bold text-white transition duration-300"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
