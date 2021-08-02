import styled, { css } from 'styled-components';

interface IButton {
    width?: string;
    height?: string;
    variant?: 'primary' | 'secondary';
}

export const Button = styled.button<IButton>`
    color: #eee;
    margin: 1rem 0;
    padding: 1rem 2rem;
    border-radius: 5px;
    background-color: hsl(250, 100%, 65%);
    transition: 0.4s all ease-in-out;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};

    &:hover {
        background-color: hsl(250, 100%, 60%);
    }

    ${(props) =>
        props.variant === 'secondary' &&
        css`
            background-color: transparent;
            color: #6a4cff;
        `}
`;
