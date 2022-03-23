import { exitPreview } from '@prismicio/next'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function exit(req: NextApiRequest, res: NextApiResponse) {
  await exitPreview({ res, req })
}
