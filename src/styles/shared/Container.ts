import styled from 'styled-components';

interface IContainerProps {
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
    background?: string;
    borderRadius?: string;
}

export const Container = styled.div<IContainerProps>`
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    margin: ${(props) => props.margin || '0 auto'};
    padding: ${(props) => props.padding || '0'};
    background: ${(props) => props.background || 'transparent'};
    border-radius: ${(props) => props.borderRadius || '5px'};

    @media screen and (max-width: 500px) {
        width: 80%;
    }
`;
