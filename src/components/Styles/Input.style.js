import styled from 'styled-components'

export const Input = styled.input`
  padding: 5px;
  font: inherit;
  border: 1px solid ${({ theme }) => theme.colors.headerFooter};
  outline: none;
  width: 90%;
`

export const Textarea = styled.textarea`
  resize: none;
  height: 80px;
  width: 100%;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.headerFooter};
  outline: none;
  @media (max-width: 600px) {
    width: 90%;
    font: inherit;
  }
`
