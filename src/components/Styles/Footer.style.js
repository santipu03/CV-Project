import styled from 'styled-components'

export const Footer = styled.footer`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.headerFooter};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`
