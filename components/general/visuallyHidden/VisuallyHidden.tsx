import * as styled from './styled'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const VisuallyHidden = ({ children }: Props): JSX.Element => (
  <styled.VisuallyHidden>{children}</styled.VisuallyHidden>
)

export default VisuallyHidden
