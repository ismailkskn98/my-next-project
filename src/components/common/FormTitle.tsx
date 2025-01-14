import classNames from "classnames";
import React from "react";

export enum FormType {
  Login = "login",
  Register = "register",
  ForgotPassword = "forgotPassword",
}

export default function FormTitle({
  title,
  type,
}: {
  title: string;
  type: FormType;
}) {
  return (
    <div className="w-full rounded-3xl">
      <h2
        className={classNames(
          "text-nowrap text-center font-raleway font-extrabold capitalize text-black/80",
          {
            "text-6xl": type === FormType.Login,
            "text-4xl sm:text-5xl lg:text-6xl": type === FormType.Register,
            "text-5xl xl:text-6xl": type === FormType.ForgotPassword,
          },
        )}
      >
        {title}
      </h2>
    </div>
  );
}
