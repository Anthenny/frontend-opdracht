import styled from "styled-components";

export const StyledTable = styled.table`
  width: auto;
  margin: 0 auto;
  margin-bottom: 3rem;
  border-collapse: collapse;
  box-shadow: 0 5px 10px gray;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: left;

  thead {
    box-shadow: 0 5px 10px gray;
    align-items: center;

    th {
      padding: 0.8rem 1.6rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
      transition: 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.orange};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  td {
    padding: 1rem 2rem;
    font-size: 0.9rem;
  }

  tr:nth-child(even) {
    background-color: lightgray;
  }
`;
