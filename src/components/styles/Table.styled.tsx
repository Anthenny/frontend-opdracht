import styled from "styled-components";

export const StyledTable = styled.table`
  width: auto;
  margin: 0 auto;
  margin-bottom: 5rem;
  border-collapse: collapse;
  box-shadow: 0 5px 10px gray;
  background-color: white;
  text-align: left;
  overflow: hidden;

  thead {
    box-shadow: 0 5px 10px gray;
    align-items: center;

    th {
      padding: 0.8rem 1.6rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 1.2rem;
      font-weight: 400;

      button {
        margin-left: 0.6rem;
        padding: 0.3rem 1rem;
        cursor: pointer;
        text-align: center;
      }
    }
  }

  td {
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }

  tr:nth-child(even) {
    background-color: lightgray;
  }
`;
