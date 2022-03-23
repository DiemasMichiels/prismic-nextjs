import { default as NextImage } from 'next/image'
import * as styled from './styled'
import type { Slice, ImageField } from '@prismicio/types'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'

export type ImageSlice = Slice<
  PRISMIC_SLICES.IMAGE,
  {
    image: ImageField
  }
>

type Props = {
  slice: ImageSlice
}

const Image = ({ slice }: Props) => {
  const { image } = slice.primary

  return (
    <styled.ImageSection>
      {image?.url && (
        <NextImage
          src={image.url}
          alt={image.alt ?? undefined}
          width={image.dimensions.width}
          height={image.dimensions.height}
          layout='responsive'
        />
      )}
    </styled.ImageSection>
  )
}

export default Image
