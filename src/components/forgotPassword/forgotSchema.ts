import * as Yup from "yup";

const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta gereklidir"),
});

export default forgotSchema;
