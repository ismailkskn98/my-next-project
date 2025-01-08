"use client";

import React from "react";
import { Formik, Form } from "formik";
import registerSchema from "./registerSchema";
import CustomInput from "./components/CustomInput";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

const Register: React.FC = () => {
  const initialValues: RegisterFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };

  const handleSubmit = (values: RegisterFormValues) => {
    console.log(values);
    // Burada kayıt işlemlerini gerçekleştirebilirsiniz
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Hesap oluştur
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
              <CustomInput
                name="firstName"
                label="Ad"
                type="text"
                placeholder="Adınız"
              />
              <CustomInput
                name="lastName"
                label="Soyad"
                type="text"
                placeholder="Soyadınız"
              />
              <CustomInput
                name="email"
                label="E-posta"
                type="email"
                placeholder="ornek@email.com"
              />
              <CustomInput
                name="password"
                label="Şifre"
                type="password"
                placeholder="********"
              />
              <CustomInput
                name="confirmPassword"
                label="Şifre Tekrarı"
                type="password"
                placeholder="********"
              />
              <CustomInput
                name="phoneNumber"
                label="Telefon Numarası"
                type="tel"
                placeholder="5xxxxxxxxx"
              />

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Kayıt Ol
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
