import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router'
import { messages } from '../i18n';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale } = router

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale={defaultLocale}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp;
