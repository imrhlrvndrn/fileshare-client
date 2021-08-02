import styled from 'styled-components';

interface FlexProps {
    direction?: 'column' | 'columnReverse' | 'row' | 'rowReverse';
    wrap?: 'wrap' | 'no-wrap' | 'wrap-reverse';
    align?: 'center' | 'flex-end' | 'flex-start';
    justify?:
        | 'center'
        | 'flex-end'
        | 'flex-start'
        | 'space-around'
        | 'space-evenly'
        | 'space-between';
    grow?: number;
    width?: string;
    height?: string;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-grow: ${(props) => props.grow || 0};
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    flex-wrap: ${(props) => props.wrap || 'no-wrap'};
    align-items: ${(props) => props.align || 'start'};
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'start'};
`;
