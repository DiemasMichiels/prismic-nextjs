import { useRouter } from 'next/router'
import { useEffect } from 'react'
import createClient from '@utils/prismic/client'
import Page from '@components/page/Page'
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

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  const uid = typeof params?.uid === 'string' ? params.uid : ''

  let doc = null

  try {
    const client = createClient({ previewData })
    doc = await client.getByUID('dynamic-page', uid, {})
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
    docs = await client.getAllByType('dynamic-page')
  } catch (error) {}

  return {
    paths: docs?.map((doc) => `/${doc.uid}`),
    fallback: true,
  }
}

export default DynamicPage
