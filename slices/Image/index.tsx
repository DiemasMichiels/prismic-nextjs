import { default as NextImage } from 'next/image'
import * as styled from './styled'
import type { ImageSlice } from '@slicemachine/prismicio'

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
          alt={image.alt ?? ''}
          width={image.dimensions.width}
          height={image.dimensions.height}
          layout='responsive'
        />
      )}
    </styled.ImageSection>
  )
}

export default Image
