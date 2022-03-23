import styled, { css } from 'styled-components'

export const visuallyHidden = css`
  &:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
  }
`

export const VisuallyHidden = styled.span`
  ${visuallyHidden}
`
