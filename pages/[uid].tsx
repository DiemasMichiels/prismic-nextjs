import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { PRISMIC_TYPES } from '@utils/prismic/constants'
import createClient from '@utils/prismic/client'
import Page from '@components/page/Page'
import { default as DynamicPageType } from '@customtypes/dynamic-page/DynamicPage'
import type { GetStaticProps, NextPage } from 'next'
import type { DynamicPageData } from '@customtypes/dynamic-page/DynamicPage'
import type { PrismicDocumentWithUID } from '@prismicio/types'

type Props = {
  doc: PrismicDocumentWithUID<DynamicPageData>
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

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const uid = typeof params?.uid === 'string' ? params.uid : ''

  let doc = null

  try {
    const client = createClient({ previewData })
    doc = await client.getByUID(PRISMIC_TYPES.DYNAMIC_PAGE, uid, {})
  } catch (error) {}

  return {
    props: {
      doc,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  let docs = undefined

  try {
    const client = createClient()
    docs = await client.getAllByType(PRISMIC_TYPES.DYNAMIC_PAGE)
  } catch (error) {}

  return {
    paths: docs?.map((doc) => `/${doc.uid}`),
    fallback: true,
  }
}

export default DynamicPage
