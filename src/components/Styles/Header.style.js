import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  background-color: ${({ theme }) => theme.colors.headerFooter};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`