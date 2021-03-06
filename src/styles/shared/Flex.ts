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
    minWidth?: string;
    minHeight?: string;
    margin?: string;
    padding?: string;
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-grow: ${(props) => props.grow || 0};
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    min-width: ${(props) => props.minWidth || 'auto'};
    min-height: ${(props) => props.minHeight || 'auto'};
    flex-wrap: ${(props) => props.wrap || 'no-wrap'};
    align-items: ${(props) => props.align || 'start'};
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'start'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '0'};
`;
