import { setPreviewData, redirectToPreviewURL } from '@prismicio/next'
import createClient from '@utils/prismic/client'
import { linkResolver } from '@utils/prismic/routes'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = createClient({ req })
  await setPreviewData({ req, res })
  await redirectToPreviewURL({ req, res, client, linkResolver })
}
