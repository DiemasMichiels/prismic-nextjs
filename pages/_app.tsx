import { ThemeProvider } from 'styled-components'
import { DefaultSeo, NextSeo } from 'next-seo'
import Head from 'next/head'
import { withPasswordProtect } from '@storyofams/next-password-protect'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import Link from '@components/general/link/Link'
import THEME from '@theme/theme'
import SEO from '@root/next-seo.config'
import { GlobalStyle } from '@components/general/GlobalStyle'
import * as gtag from '@lib/gtag'
import { linkResolver } from '@utils/prismic/routes'
import { repositoryName } from '@utils/prismic/client'
import type { AppProps } from 'next/app'
import type { PrismicDocumentWithUID } from '@prismicio/types'
import type { DynamicPageData } from '@customtypes/dynamic-page/DynamicPage'

type PageProps = {
  doc: PrismicDocumentWithUID<DynamicPageData>
}

const App = ({
  Component,
  pageProps,
}: Omit<AppProps<PageProps>, 'pageProps'> & {
  pageProps: PageProps
}) => {
  const router = useRouter()
  const { seoTitle, seoDescription, seoImage } = pageProps.doc?.data ?? {}

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <DefaultSeo {...SEO} />
      {seoTitle && (
        <NextSeo
          title={seoTitle ?? undefined}
          description={seoDescription ?? undefined}
          openGraph={{
            description: seoDescription ?? undefined,
            images: seoImage?.url
              ? [
                  {
                    url: seoImage.url,
                    alt: seoImage.alt ?? undefined,
                    width: seoImage.dimensions?.width,
                    height: seoImage.dimensions?.height,
                  },
                ]
              : undefined,
            site_name: seoTitle ?? undefined,
            title: seoTitle ?? undefined,
            type: 'website',
            url: typeof window !== 'undefined' ? window.location.href : '',
          }}
        />
      )}

      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href} {...props}>
            {children}
          </Link>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <ThemeProvider theme={THEME}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}

export default process.env.PASSWORD_PROTECT ? withPasswordProtect(App) : App
