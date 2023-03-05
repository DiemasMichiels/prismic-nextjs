import { useRouter } from 'next/router'
import { useEffect } from 'react'
import createClient from '@utils/prismic/client'
import Page from '@components/page/Page'
import { HOMEPAGE_UID } from '@utils/prismic/routes'
import { default as DynamicPageType } from '@customtypes/dynamic-page/DynamicPage'
import type { GetStaticProps, NextPage } from 'next'
import type { DynamicPageDocument } from '@slicemachine/prismicio'

type Props = {
  doc: DynamicPageDocument
}

const DynamicPage: NextPage<Props> = ({ doc }) => {
  const router = useRouter()

  useEffect(() => {
    if (!doc || !doc.id) {
      router.replace('/')
    }
  }, [doc, router])

  if (!doc || !doc.id) {
    return null
  }

  return <Page>{!router.isFallback && <DynamicPageType doc={doc} />}</Page>
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  let doc = null

  try {
    const client = createClient({ previewData })
    doc = await client.getByUID('dynamic-page', HOMEPAGE_UID, {})
  } catch (error) {}

  return {
    props: {
      doc,
    },
    revalidate: 60,
  }
}

export default DynamicPage
