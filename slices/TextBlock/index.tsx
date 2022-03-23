import { PrismicRichText } from '@prismicio/react'
import * as styled from './styled'
import type { Slice, RichTextField } from '@prismicio/types'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'

export type TextBlockSlice = Slice<
  PRISMIC_SLICES.TEXT_BLOCK,
  {
    textBlock: RichTextField
  }
>

type Props = {
  slice: TextBlockSlice
}

const TextBlock = ({ slice }: Props) => {
  const { textBlock } = slice.primary

  return (
    <styled.TextBlockSection>
      <PrismicRichText field={textBlock} />
    </styled.TextBlockSection>
  )
}

export default TextBlock
