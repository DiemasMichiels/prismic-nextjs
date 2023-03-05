import { SliceZone } from '@prismicio/react'
import { components } from '@slices'
import type { DynamicPageDocument } from '@slicemachine/prismicio'

type Props = {
  doc: DynamicPageDocument
}

const DynamicPage = ({ doc }: Props) => {
  return <SliceZone slices={doc.data.slices} components={components} />
}

export default DynamicPage
