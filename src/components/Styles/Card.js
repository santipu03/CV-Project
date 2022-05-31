import styled from 'styled-components'


export const Card = styled.div`
  background-color: #eee;
  width: 60%;
  min-height: 380px;
  border: 1px solid #333;
  padding: 20px;

  @media (max-width: 1000px) {
    width: 80%
  }
  @media (max-width: 700px) {
    width: 90%
  }

`