import "@fontsource/roboto";
import { dir } from "i18next";
import ThemeProvider from "../../core/theme";
import { i18nNamespaces } from "../../core/utils/i18nNamespaces";
import "../../scss/global.css";
import initializeTranslations from "../i18n";

export interface LocaleParamsProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: LocaleParamsProps) {
  const { t } = await initializeTranslations(params.locale, i18nNamespaces);

  return {
    title: {
      default: t("homeTitle"),
      template: "%s - Ishonch",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

const locales = ["uz", "ru", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function RootLayout({ children, params: { locale } }: Props) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
