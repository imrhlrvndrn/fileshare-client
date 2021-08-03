import styled, { css } from 'styled-components';

interface IAlertProps {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    variant?: 'success' | 'error';
}

export const Alert = styled.div<IAlertProps>`
    color: #1a936f;
    border-radius: 5px;
    background-color: #a5dfb2;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '1rem'};

    ${(props) =>
        props.variant === 'error' &&
        css`
            color: #a72541;
            background-color: #e99bac;
        `}
`;
