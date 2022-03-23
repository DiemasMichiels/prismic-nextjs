import * as styled from './styled'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Page = ({ children }: Props) => {
  return <styled.Page>{children}</styled.Page>
}

export default Page
