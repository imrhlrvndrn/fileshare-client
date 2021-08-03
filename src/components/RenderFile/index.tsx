import { FunctionComponent } from 'react';
import { sizeInMb } from '@utils/index';

// styles
import { Text, Flex } from '@styles/shared';
import { RenderFileContainer } from './StyledFileRender';
import { Container } from '@styles/shared/Container';

interface IRenderFileProps {
    file: {
        _id?: string;
        file_name: string;
        size: number; // in bytes
    };
}

export const RenderFile: FunctionComponent<IRenderFileProps> = ({
    file: { file_name, size },
}) => {
    return (
        <Container padding="1rem 2rem" margin="1rem 0 0 0" background="#eee">
            <Flex width="100%" align="center" justify="space-between">
                <Text>{file_name}</Text>
                <Text>{sizeInMb(size)}MB</Text>
            </Flex>
        </Container>
    );
};
