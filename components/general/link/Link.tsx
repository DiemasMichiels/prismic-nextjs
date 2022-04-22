import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { linkResolver } from '@utils/prismic/routes'
import { PRISMIC_TYPES } from '@utils/prismic/constants'
import type {
  FilledLinkToDocumentField,
  FilledLinkToWebField,
  LinkField,
} from '@prismicio/types'
import type { MouseEventHandler, ReactNode } from 'react'

type Props = {
  href: LinkField | string
  children: ReactNode
  target?: '_blank' | string
  className?: string
  onClick?: MouseEventHandler
}

const Link = ({ href, children, target, onClick, className }: Props) => {
  const router = useRouter()

  let actualHref = '#'
  let actualTarget = target

  if (typeof href === 'string') {
    actualHref = href
  } else if (
    Object.values(PRISMIC_TYPES).includes(
      (href as FilledLinkToDocumentField).type,
    )
  ) {
    actualHref = linkResolver(href as FilledLinkToDocumentField)
  } else if ((href as FilledLinkToWebField).url !== undefined) {
    if ((href as FilledLinkToWebField).url.includes('https://#')) {
      actualHref = (href as FilledLinkToWebField).url.replace('https:/', '')
    } else {
      actualHref = (href as FilledLinkToWebField).url
      actualTarget =
        (href as FilledLinkToWebField).target ??
        ((href as FilledLinkToWebField).url.includes('http')
          ? '_blank'
          : undefined)
    }
  } else {
    return (
      <div className={className} style={{ pointerEvents: 'none' }}>
        {children}
      </div>
    )
  }

  return (
    <NextLink href={actualHref}>
      <a
        onClick={onClick}
        aria-current={router.pathname === actualHref ? 'page' : ''}
        className={className}
        target={actualTarget}
        rel={actualTarget === '_blank' ? 'noreferrer noopener' : undefined}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
