import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const programs = ["science", "innovation", "instructors", "partnerships"] as const;
const operations = ["resources", "schedules", "quality"] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  const otherLocale = locale === "ar" ? "he" : "ar";

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#fbf8fd] text-[#1b1b1f]"
    >
      <header className="sticky top-0 z-50 border-b border-[#e4e2e6] bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-10">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src="/images/Qudra-logo.jpeg"
              alt="Qudra logo"
              width={150}
              height={60}
              priority
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#about" className="text-sm font-semibold text-[#00a99d]">
              {t("publicNav.about")}
            </a>
            <a
              href="#programs"
              className="text-sm font-semibold text-[#45464f] transition hover:text-[#00a99d]"
            >
              {t("publicNav.programs")}
            </a>
            <a
              href="#communities"
              className="text-sm font-semibold text-[#45464f] transition hover:text-[#00a99d]"
            >
              {t("publicNav.communities")}
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-[#45464f] transition hover:text-[#00a99d]"
            >
              {t("publicNav.contact")}
            </a>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <Link
              href={`/${otherLocale}`}
              className="rounded-lg px-3 py-2 text-xs font-semibold text-[#45464f] transition hover:bg-[#f5f3f7] hover:text-[#00a99d] md:text-sm"
            >
              {otherLocale === "ar"
                ? t("home.languageArabic")
                : t("home.languageHebrew")}
            </Link>

            <Link
              href={`/${locale}/login`}
              className="rounded-lg bg-[#0a1d4a] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#000621] md:px-5 md:text-sm"
            >
              {t("auth.staffLogin")}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1d4a] via-[#001b4f] to-[#fbf8fd]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-[#53dbc5]" />
          <div className="absolute -left-20 bottom-10 h-80 w-80 rotate-45 rounded-3xl border border-[#73f8e1]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div className="text-right">
            <p className="mb-5 inline-flex rounded-full bg-[#70f5de]/15 px-4 py-2 text-sm font-semibold text-[#73f8e1]">
              {t("app.description")}
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              {t("home.heroTitleLine1")}
              <br />
              <span className="text-[#73f8e1]">
                {t("home.heroTitleHighlight")}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#dbe1ff] md:text-xl">
              {t("home.heroSubtitle")}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#00b09b] px-8 text-sm font-bold text-white shadow-lg transition hover:bg-[#53dbc5] hover:text-[#00201b]"
              >
                {t("home.contactButton")}
              </a>

              <Link
                href={`/${locale}/login`}
                className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-[#b5c5fb] px-8 text-sm font-bold text-[#dbe1ff] transition hover:bg-[#dbe1ff] hover:text-[#0a1d4a]"
              >
                {t("home.staffAreaButton")}
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:justify-center">
            <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-full border-4 border-[#00b09b]/30 bg-[#0a1d4a]/60 shadow-2xl">
              <div className="absolute h-56 w-56 rounded-full border border-[#73f8e1]/40" />
              <div className="absolute h-32 w-32 rounded-3xl border border-[#73f8e1]/50" />
              <div className="z-10 rounded-3xl bg-white/10 p-8 text-center backdrop-blur">
                <p className="text-6xl font-bold text-[#73f8e1]">Q</p>
                <p className="mt-2 text-sm font-semibold text-white">
                Qudra Innovation Center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center bg-white py-6">
        <div className="h-1 w-32 rounded-full bg-[#00b09b]" />
      </div>

      <section id="about" className="bg-white px-4 py-16 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#0a1d4a] md:text-4xl">
            {t("home.aboutTitle")}
          </h2>
          <p className="mt-6 text-lg leading-9 text-[#45464f]">
            {t("home.aboutText")}
          </p>
        </div>
      </section>

      <section id="programs" className="bg-[#f5f3f7] px-4 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#0a1d4a] md:text-4xl">
            {t("home.programsTitle")}
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program}
                className="rounded-2xl border-t-4 border-[#00b09b] bg-white p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 mr-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00b09b]/10 text-xl font-bold text-[#00a99d]">
                  ✦
                </div>

                <h3 className="text-xl font-bold text-[#0a1d4a]">
                  {t(`home.programs.${program}.title`)}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#45464f]">
                  {t(`home.programs.${program}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="communities"
        className="bg-white px-4 py-20 text-right md:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="rounded-2xl bg-[#e4e2e6] p-8">
            <div className="flex h-72 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#dbe1ff]">
              <div className="relative h-52 w-52">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#00b09b]/25" />
                <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-[#0a1d4a]/20" />
                <div className="absolute left-10 top-16 h-28 w-28 rounded-3xl border-4 border-[#00b09b]/50" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0a1d4a] md:text-4xl">
              {t("home.operationsTitle")}
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#45464f]">
              {t("home.operationsText")}
            </p>

            <ul className="mt-8 space-y-4">
              {operations.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[#0a1d4a]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00b09b] text-sm text-white">
                    ✓
                  </span>
                  <span className="text-base font-semibold">
                    {t(`home.operationsItems.${item}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0a1d4a] px-4 py-16 md:px-10">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-[#000621] p-8 text-center md:p-12">
          <div className="absolute right-0 top-0 h-16 w-16 rounded-tr-2xl border-r-4 border-t-4 border-[#00b09b] opacity-60" />
          <div className="absolute bottom-0 left-0 h-16 w-16 rounded-bl-2xl border-b-4 border-l-4 border-[#00b09b] opacity-60" />

          <h2 className="text-3xl font-bold text-white">
            {t("home.staffPortalTitle")}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#b5c5fb]">
            {t("home.staffPortalText")}
          </p>

          <Link
            href={`/${locale}/login`}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#00b09b] px-8 text-sm font-bold text-white transition hover:bg-[#53dbc5] hover:text-[#00201b]"
          >
            {t("home.staffPortalButton")}
          </Link>
        </div>
      </section>

      <section id="contact" className="bg-[#f5f3f7] px-4 py-20 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#0a1d4a] md:text-4xl">
            {t("home.contactTitle")}
          </h2>

          <p className="mt-4 leading-8 text-[#45464f]">
            {t("home.contactText")}
          </p>

          <form className="mx-auto mt-8 flex max-w-md flex-col gap-4 text-right">
            <input
              type="text"
              placeholder={t("home.contactName")}
              className="rounded-lg border border-[#c5c6d0] bg-white px-4 py-3 outline-none transition focus:border-[#00b09b] focus:ring-2 focus:ring-[#00b09b]/20"
            />

            <input
              type="email"
              placeholder={t("home.contactEmail")}
              className="rounded-lg border border-[#c5c6d0] bg-white px-4 py-3 outline-none transition focus:border-[#00b09b] focus:ring-2 focus:ring-[#00b09b]/20"
            />

            <button
              type="submit"
              className="rounded-lg bg-[#0a1d4a] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#000621]"
            >
              {t("home.contactSubmit")}
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t-4 border-[#00b09b] bg-[#000621] px-4 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row-reverse">
          <Image
            src="/images/Qudra-logo.jpeg"
            alt="Qudra logo"
            width={130}
            height={52}
            className="h-12 w-auto rounded bg-white object-contain p-1"
          />

          <p className="text-center text-sm text-[#e4e2e6]">
            {t("home.footerText")}
          </p>

          <div className="text-lg font-bold text-[#73f8e1]">QUDRA</div>
        </div>
      </footer>
    </main>
  );
}