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
  } else if (
    ['dynamic-page'].includes((href as FilledLinkToDocumentField).type)
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
    <NextLink
      className={className}
      href={actualHref}
      onClick={onClick}
      target={actualTarget}
      rel={actualTarget === '_blank' ? 'noreferrer noopener' : undefined}
      aria-current={router.asPath === actualHref ? 'page' : undefined}
    >
      {children}
    </NextLink>
  )
}

export default Link
