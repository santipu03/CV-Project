import styled from 'styled-components'


export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  width: 60%;
  min-height: 380px;
  border: 1px solid ${({ theme }) => theme.colors.headerFooter};
  padding: 20px;

  @media (max-width: 1000px) {
    width: 80%
  }
  @media (max-width: 700px) {
    width: 90%
  }

`