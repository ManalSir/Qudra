import { Assistant, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
});

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "700"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "he")) {
    notFound();
  }

  const messages = await getMessages();
  const fontClassName = locale === "he" ? assistant.className : cairo.className;

  return (
    <NextIntlClientProvider messages={messages}>
      <div dir="rtl" lang={locale} className={fontClassName}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}