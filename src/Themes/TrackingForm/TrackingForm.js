import styled from "styled-components";

const FormContainer = styled.section `
    max-width: 600px;
    margin: ${props => props.theme.spacing.xxLarge} auto;
    padding: ${props => props.theme.spacing.large};
    background-color: ${props => props.theme.colors.lightBg};
    border-radius: ${props => props.theme.radius.xLarge};
    box-shadow: ${props => props.theme.radius.boxShadow};
`

const FormLegend = styled.legend `
    font-size: ${props => props.theme.font.large};
    font-weight: bold;
    margin-bottom: ${props => props.theme.spacing.large};
    color: ${props => props.theme.colors.darkGray};
`
const FormGroup = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.theme.spacing.medium};

    label, legend {
        font-weight: ${props => props.theme.font.mediumWg};
        margin-bottom: ${props => props.theme.spacing.xSmall};
        color: ${props => props.theme.colors.mediumGray};
    }
    
    input[type=text],
    input[type=date],
    select {
        padding: ${props => props.theme.spacing.small};
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: ${props => props.theme.radius.medium};
        font-size: ${props => props.theme.font.baseSize};
        background-color: ${props => props.theme.colors.white};
        transition: border-color 0.3s;

        &:focus {
            border-color: ${props => props.theme.colors.secondary};
            outline: none;
        }
    }
`
const SubmitButton = styled.button `
    display: block;
    margin: 0 auto;
    padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.xLarge};
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    border: none;
    border-radius: ${props => props.theme.radius.medium};
    font-size: ${props => props.theme.font.baseSize};
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background-color: #40b6d5;
    }
`

export {
    FormContainer,
    FormLegend,
    FormGroup,
    SubmitButton
}