import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { linkResolver } from '@utils/prismic/routes'
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
  } else if ((href as FilledLinkToDocumentField).uid !== undefined) {
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
  }

  return (
    <NextLink href={actualHref}>
      <a
        onClick={onClick}
        className={`${router.pathname === actualHref ? 'active' : ''} ${
          className ? className : ''
        }`}
        target={actualTarget}
        rel={actualTarget === '_blank' ? 'noreferrer noopener' : undefined}
      >
        {children}
      </a>
    </NextLink>
  )
}

export default Link
