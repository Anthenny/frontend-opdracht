import styled from "styled-components";

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-weight: 300;
    font-size: 1.6rem;
  }

  h2 {
    text-align: center;
    font-weight: 300;
    font-size: 1.3rem;
  }

  @media (max-width: ${({ theme }) => theme.laptop}) {
    max-width: 1000px;
  }
`;

export default Container;
