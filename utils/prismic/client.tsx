import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from '@root/sm.json'
import type {
  ClientConfig as PrismicClientConfig,
  HttpRequestLike,
} from '@prismicio/client'
import type { PreviewData } from 'next'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

type ClientConfig = PrismicClientConfig & {
  previewData?: PreviewData
  req?: HttpRequestLike
}

// Prismic client
export const createClient = (config: ClientConfig = {}) => {
  const client = prismic.createClient(endpoint, { ...config })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}

export default createClient
