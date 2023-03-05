import type { FilledLinkToDocumentField } from '@prismicio/types'

export const HOMEPAGE_UID = 'home'

export const linkResolver = (doc: FilledLinkToDocumentField) => {
  if (doc.isBroken) {
    return '/404'
  }

  if (doc.type === 'dynamic-page' && doc.uid !== HOMEPAGE_UID) {
    return `/${doc.uid}`
  }

  return '/'
}
