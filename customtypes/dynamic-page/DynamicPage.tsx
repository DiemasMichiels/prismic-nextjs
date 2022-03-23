import Slices from '@components/slices/Slices'
import type {
  KeyTextField,
  ImageField,
  PrismicDocumentWithUID,
} from '@prismicio/types'
import type SliceTypes from '@slices/sliceTypes'

type SEOPageData = {
  seoTitle: KeyTextField
  seoDescription: KeyTextField
  seoImage: ImageField
}

export type DynamicPageData = SEOPageData & {
  // Specify specific types if need be
  slices: [SliceTypes]
}

type Props = {
  doc: PrismicDocumentWithUID<DynamicPageData>
}

const DynamicPage = ({ doc }: Props) => {
  return <Slices slices={doc.data.slices} />
}

export default DynamicPage
