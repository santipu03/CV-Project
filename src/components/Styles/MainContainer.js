import styled from "styled-components";

export const MainContainer = styled.main`
  min-height: calc(100vh - 120px);
  background-color: #ccc;
  padding: 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 580px){
    padding: 20px;
  }
`