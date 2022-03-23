import styled, { css } from 'styled-components'

export const ContainerStyle = css`
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`

export const Container = styled.div`
  ${ContainerStyle}
`

export const ButtonStyle = css`
  padding: 10px 16px;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
  }
`
