import { PrismicRichText } from '@prismicio/react'
import * as styled from './styled'
import type { HeroSlice } from '@slicemachine/prismicio'

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
