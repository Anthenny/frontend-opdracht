import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;

  h1 {
    text-align: center;
    font-weight: 300;
  }

  @media(max-width: ${({ theme }) => theme.laptop}){
    max-width: 1000px;
    
}
`; 

export default Container;
