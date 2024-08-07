import Layout from "../../../client/components/Layout";
import TranslationsProvider from "../../../client/components/TranslationsProvider";
import ProductsContainer from "../../../client/containers/Products/ProductsContainer";
import { i18nNamespaces } from "../../../core/utils/i18nNamespaces";
import initializeTranslations from "../../i18n";
import { LocaleParamsProps } from "../layout";

export default async function Products({ params }: LocaleParamsProps) {
  const locale = params.locale;

  const { resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={params.locale} resources={resources}>
      <Layout>
        <ProductsContainer />
      </Layout>
    </TranslationsProvider>
  );
}
