import styled from "styled-components";

const FooterContainer = styled.footer `
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.xLarge};
`

const FooterNav = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: ${props => props.theme.spacing.large};

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: ${props => props.theme.spacing.medium};
        margin: 0;
        padding: 0;
        align-items: center;
        text-decoration: none;
        cursor: pointer;

        li {
            color: ${props => props.theme.colors.white};
            font-weight: ${props => props.theme.font.mediumWg};
            font-size: ${props => props.theme.font.small};
            display: flex;
            align-items: center;
            gap: ${props => props.theme.spacing.xSmall};
            transition: color 0.3s;

            &:hover {
                color: ${props => props.theme.colors.primary};
            }
            
            img {
                width: 22px;
                height: 22px;
            }
        }
    }
`
const CopyrightText = styled.div `
    font-size: ${props => props.theme.font.small};
    font-weight: ${props => props.theme.font.regularWg};
    color: ${props => props.theme.colors.primary};
`

export {
    FooterContainer,
    FooterNav,
    CopyrightText
}