import styled from "styled-components";

const TrackingContainer = styled.section `
    max-width: 1000px;
    margin: ${props => props.theme.spacing.xxLarge} auto;
    padding: ${props => props.theme.spacing.large};
    background-color: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.radius.xxLarge};
    box-shadow: ${props => props.theme.radius.boxShadow};

    h1 {
        font-size: ${props => props.theme.font.extraLarge};
        font-weight: bold;
        color: ${props => props.theme.colors.darkGray};
        text-align: center;
        margin-bottom: ${props => props.theme.spacing.xLarge};
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: ${props => props.theme.font.baseSize};
        background-color: ${props => props.theme.colors.secondary};

        caption {
            caption-side: top;
            font-size: ${props => props.theme.font.medium};
            font-weight: ${props => props.theme.font.mediumWg};
            margin-bottom: ${props => props.theme.spacing.small};
            color: ${props => props.theme.colors.mediumGray};
        }
    }

    tr {
        &:nth-child(even) {
            background-color: ${props => props.theme.colors.tableEven};
        }
        
        &:hover {
            background-color: ${props => props.theme.colors.tableHover};
            transition: background-color 0.3s;
        }
    }
    
    th {
        padding: ${props => props.theme.spacing.medium};
        border: 1px solid ${props => props.theme.colors.border};
        text-align: left;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        font-weight: ${props => props.theme.font.mediumWg};
    }

    td {
        padding: ${props => props.theme.spacing.small};
        border: 1px solid ${props => props.theme.colors.border};
        text-align: left;

        select {
            padding: 3.5px;
            border: 1px solid ${props => props.theme.colors.border};
            border-radius: ${props => props.theme.radius.medium};
            font-size: ${props => props.theme.font.small};
            background-color: ${props => props.theme.colors.white};
        }
    }
`

const UpdateButton = styled.input `
    padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.large};
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

const HistoryButton = styled.button `
    padding: ${props => props.theme.spacing.xSmall} ${props => props.theme.spacing.small};
    font-size: ${props => props.theme.font.small};
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
    TrackingContainer,
    UpdateButton,
    HistoryButton
}