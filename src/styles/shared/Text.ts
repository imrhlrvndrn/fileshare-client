import styled from 'styled-components';

interface TextProps {
    weight?:
        | 'bold'
        | 'bolder'
        | 'lighter'
        | 'normal'
        | 'inherit'
        | '400'
        | '600'
        | '800';
    size?: string;
    margin?: string;
    padding?: string;
    align?: 'center' | 'left' | 'right';
}

export const Text = styled.p<TextProps>`
    text-align: ${(props) => props.align || 'left'};
    font-weight: ${(props) => props.weight || '400'};
    font-size: ${(props) => props.size || '1rem'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
`;
