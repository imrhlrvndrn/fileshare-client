import styled from 'styled-components';

interface StyledDropzoneProps {
    background?: 'string';
}

export const StyledDropzone = styled.div<StyledDropzoneProps>`
    padding: 2rem;
    width: 400px;
    height: 350px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.4s all ease-in-out;
    background: ${(props) => props.background || 'transparent'};

    @media screen and (max-width: 500px) {
        width: auto;
        height: auto;
    }
`;
