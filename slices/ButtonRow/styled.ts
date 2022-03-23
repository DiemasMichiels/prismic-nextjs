import styled from 'styled-components'
import { ButtonStyle, ContainerStyle } from '@components/general/styled'
import Link from '@components/general/link/Link'

export const ButtonRowSection = styled.section`
  ${ContainerStyle}

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin: 48px auto;

  a + a {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -16px;
      background-image: url('/images/dash.svg');
      transform: translate(-50%, -50%);
    }
  }
`

export const ButtonLink = styled(Link)`
  ${ButtonStyle}
`
