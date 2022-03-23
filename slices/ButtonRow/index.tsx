import * as styled from './styled'
import type { Slice, KeyTextField, LinkField } from '@prismicio/types'
import type { PRISMIC_SLICES } from '@utils/prismic/constants'

export type ButtonRowSlice = Slice<
  PRISMIC_SLICES.BUTTON_ROW,
  {},
  {
    buttonText: KeyTextField
    buttonLink: LinkField
  }
>

type Props = {
  slice: ButtonRowSlice
}

const ButtonRow = ({ slice }: Props) => {
  return (
    <styled.ButtonRowSection>
      {slice.items?.length > 0 &&
        slice.items.map(
          (item, i) =>
            item.buttonText &&
            item.buttonLink && (
              <styled.ButtonLink key={i} href={item.buttonLink}>
                {item.buttonText}
              </styled.ButtonLink>
            ),
        )}
    </styled.ButtonRowSection>
  )
}

export default ButtonRow
