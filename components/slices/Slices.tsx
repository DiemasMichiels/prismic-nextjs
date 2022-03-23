import { ButtonRow, Hero, Image as ImageSlice, TextBlock } from '@slices'
import { PRISMIC_SLICES } from '@utils/prismic/constants'
import type SliceTypes from '@slices/sliceTypes'

type Props = {
  slices: SliceTypes[]
}

const Slices = ({ slices }: Props) => {
  return (
    <>
      {slices?.length > 0 &&
        slices.map((slice, i) => {
          switch (slice.slice_type) {
            case PRISMIC_SLICES.BUTTON_ROW:
              return (
                <ButtonRow key={`${slice.slice_type}-${i}`} slice={slice} />
              )
            case PRISMIC_SLICES.HERO:
              return <Hero key={`${slice.slice_type}-${i}`} slice={slice} />
            case PRISMIC_SLICES.IMAGE:
              return (
                <ImageSlice key={`${slice.slice_type}-${i}`} slice={slice} />
              )
            case PRISMIC_SLICES.TEXT_BLOCK:
              return (
                <TextBlock key={`${slice.slice_type}-${i}`} slice={slice} />
              )
            default:
              return null
          }
        })}
    </>
  )
}

export default Slices
