import styled from "styled-components";

export const StyledFooter = styled.footer`
  height: "10%";

  h6 {
    font-size: 1.4rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.red};
    margin-bottom: 10px;
  }

  div {
    display: flex;
    width: 600px;

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 50%;

      img {
        margin-right: 10px;
      }

      p {
        font-size: 1.2rem;
        font-weight: 300;
      }
    }
  }
`;
