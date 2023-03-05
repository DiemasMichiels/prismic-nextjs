import * as styled from './styled'
import type { ButtonRowSlice } from '@slicemachine/prismicio'

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
