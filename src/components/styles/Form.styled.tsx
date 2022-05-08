import styled from "styled-components";

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        padding: .4rem .6rem;
        cursor: pointer;
        font-size: 1.1rem;
        font-weight: 300;
        text-align: center;
        border: 1px solid ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.orange};
        color: ${({theme}) => theme.colors.white};
        border-radius: 4px;
        transition: 0.2s ease;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        &:hover {
            background-color: ${({theme}) => theme.colors.white};
            color: ${({theme}) => theme.colors.orange};
            border: 1px solid ${({theme}) => theme.colors.orange};

        }

    }
`