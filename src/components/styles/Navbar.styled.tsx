import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  li {
    list-style: none;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: 500;
    transition: 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
