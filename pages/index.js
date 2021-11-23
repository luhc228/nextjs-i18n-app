import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage, FormattedNumber, FormattedDate, useIntl } from 'react-intl';
import LocaleSwitcher from '../components/locale-switcher'

export default function IndexPage(props) {
  const intl = useIntl();
  console.log({ intl });

  const router = useRouter()
  console.log(router);
  const { locale, locales, defaultLocale } = router

  return (
    <div>
      <FormattedNumber value={2000} />
      <br />
      <FormattedDate value={Date.now()} />
      <br />
      <input placeholder={`e.g. ${intl.formatDate(Date.now())}`} />

      <h1><FormattedMessage id="title" /></h1>
      <p><FormattedMessage id="currentLocale" />: {locale}</p>
      <p><FormattedMessage id="defaultLocale" />: {defaultLocale}</p>
      <p><FormattedMessage id="configuredLocales" />: {JSON.stringify(locales)}</p>

      <LocaleSwitcher />

      <Link href="/gsp">
        <a>To getStaticProps page</a>
      </Link>
      <br />

      <Link href="/gsp/first">
        <a>To dynamic getStaticProps page</a>
      </Link>
      <br />

      <Link href="/gssp">
        <a>To getServerSideProps page</a>
      </Link>
      <br />
    </div>
  )
}
