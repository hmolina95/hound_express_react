import styled from "styled-components";

const HeaderElement = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.xLarge};
    background-color: ${props => props.theme.colors.primary};
`;

const LogoContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: ${props => props.theme.spacing.small}
`;

const Logo = styled.img `
    width: 250px;
    heigth: auto;
`;

const NavContainer = styled.ul `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: ${props => props.theme.spacing.medium};
    margin: 0;
    padding: 0;
`
const NavLink = styled.li `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.colors.white};
    font-weight: bold;
    padding: ${props => props.theme.spacing.xSmall} ${props => props.theme.spacing.small};
    border-radius: ${props => props.theme.radius.small};
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.secondary};
    }
`

export {
    HeaderElement,
    LogoContainer,
    Logo,
    NavContainer,
    NavLink
}