import styled from "styled-components";

const ModalContainer = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    div {
        background: #fff;
        padding: 2rem;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
    }

    h2 {
        font-weight: bold;
        font-size: ${props => props.theme.font.medium};
    }
    
    ul {
        margin-top: 1rem;

        li {
            margin-top: 15px;
        }
    }
`
const CloseButton = styled.button `
    padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
    font-size: ${props => props.theme.font.baseSize};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    margin-top: 20px;
    border: none;
    border-radius: ${props => props.theme.radius.medium};
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`

export {
    ModalContainer,
    CloseButton
}