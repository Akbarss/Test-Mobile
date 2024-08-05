import { useTranslation } from "react-i18next";

export function getYearsWord(count: number, language: string | string[]) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  const { t } = useTranslation("home");

  switch (language) {
    case "ru":
      if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
        return t("years");
      }
      switch (lastDigit) {
        case 1:
          return t("year");
        case 2:
        case 3:
        case 4:
          return t("year_a");
        default:
          return t("years");
      }

    case "uz":
      return t("year");

    case "en":
      return count === 1 ? t("year") : t("years");

    default:
      return "";
  }
}
