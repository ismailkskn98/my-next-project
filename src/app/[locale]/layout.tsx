import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

const ralewayFont = localFont({
  src: [
    {
      path: "../fonts/Raleway-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Raleway-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Raleway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Raleway-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--raleway-font",
});

const tajawalFont = localFont({
  src: [
    {
      path: "../fonts/Tajawal-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Tajawal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Tajawal-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Tajawal-Bold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--tajawal-font",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "tr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full w-full">
      <body
        className={`h-full w-full ${ralewayFont.variable} ${tajawalFont.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
