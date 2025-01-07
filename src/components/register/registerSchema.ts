import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Ad en az 2 karakter olmalıdır")
    .max(50, "Ad en fazla 50 karakter olmalıdır")
    .required("Ad gereklidir"),
  lastName: Yup.string()
    .min(2, "Soyad en az 2 karakter olmalıdır")
    .max(50, "Soyad en fazla 50 karakter olmalıdır")
    .required("Soyad gereklidir"),
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta gereklidir"),
  password: Yup.string()
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .matches(/[a-zA-Z]/, "Şifre en az bir harf içermelidir")
    .matches(/[0-9]/, "Şifre en az bir rakam içermelidir")
    .required("Şifre gereklidir"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Şifreler eşleşmiyor")
    .required("Şifre tekrarı gereklidir"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Geçerli bir telefon numarası giriniz (10 haneli)")
    .required("Telefon numarası gereklidir"),
});

export default registerSchema;
