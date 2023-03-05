import { PrismicRichText } from '@prismicio/react'
import * as styled from './styled'
import type { TextBlockSlice } from '@slicemachine/prismicio'

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
