import Layout from "../../client/components/Layout";
import TranslationsProvider from "../../client/components/TranslationsProvider";
import CommitmentContainer from "../../client/containers/Home/CommitmentContainer";
import HomePageContainer from "../../client/containers/Home/HomePageContainer";
import ServicesContainer from "../../client/containers/Home/ServicesContainer";
import TestimonialsContainer from "../../client/containers/Home/TestimonialsContainer";
import HeartContainer from "../../client/containers/Home/TheHeartContainer";
import { i18nNamespaces } from "../../core/utils/i18nNamespaces";
import initializeTranslations from "../i18n";
import { LocaleParamsProps } from "./layout";

export default async function Home({ params }: LocaleParamsProps) {
  const locale = params.locale;

  const { resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={params.locale} resources={resources}>
      <Layout>
        <HomePageContainer />
        <CommitmentContainer />
        <ServicesContainer />
        <HeartContainer />
        <TestimonialsContainer />
      </Layout>
    </TranslationsProvider>
  );
}
