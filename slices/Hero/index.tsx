import { PrismicRichText } from '@prismicio/react'
import * as styled from './styled'
import type { Slice, RichTextField } from '@prismicio/types'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'

export type HeroSlice = Slice<
  PRISMIC_SLICES.HERO,
  {
    title: RichTextField
  }
>

type Props = {
  slice: HeroSlice
}

const Hero = ({ slice }: Props) => {
  const { title } = slice.primary

  return (
    <styled.HeroSection>
      <PrismicRichText field={title} />
    </styled.HeroSection>
  )
}

export default Hero
