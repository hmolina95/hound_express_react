import styled from "styled-components";

const PanelContainer = styled.section `
    max-width: 700px;
    margin: ${props => props.theme.spacing.xxLarge} auto;
    padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.xLarge};
    background-color: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.spacing.medium};
    box-shadow: ${props => props.theme.radius.boxShadowLight};

    h1 {
        font-size: ${props => props.theme.font.extraLarge};
        font-weight: bold;
        margin-top: 30px;
        margin-bottom: ${props => props.theme.spacing.xLarge};
        color: ${props => props.theme.colors.darkGray};
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: ${props => props.theme.spacing.medium};

        li {
            background-color: ${props => props.theme.colors.lightGray};
            padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
            border-radius: ${props => props.theme.radius.medium};
            font-size: ${props => props.theme.font.medium};
            color: ${props => props.theme.colors.mediumGray};
            transition: background-color 0.3s;

            &:hover {
                background-color: ${props => props.theme.colors.secondary};
                cursor: pointer;
            }
        }
    }
`
export {
    PanelContainer
}
