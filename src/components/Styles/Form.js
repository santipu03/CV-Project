import styled from 'styled-components'


export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: left;
  gap: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 5px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    & > div {
      align-items: center;
    }
  }
`