import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  name: yup.string().required("İsim gerekli"),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin")
    .required("E-posta gerekli"),
  message: yup
    .string()
    .required("Mesaj gerekli")
    .min(10, "Mesaj en az 10 karakter olmalı"),
});

export type ContactFormValues = yup.InferType<typeof ContactSchema>;
