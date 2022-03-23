import { PRISMIC_TYPES, HOMEPAGE_UID } from './constants'
import type { FilledLinkToDocumentField } from '@prismicio/types'

export const linkResolver = (doc: FilledLinkToDocumentField) => {
  if (doc.isBroken) {
    return '/404'
  }

  if (doc.type === PRISMIC_TYPES.DYNAMIC_PAGE && doc.uid !== HOMEPAGE_UID) {
    return `/${doc.uid}`
  }

  return '/'
}
