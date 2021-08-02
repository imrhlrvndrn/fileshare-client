import { FunctionComponent } from 'react';
import { sizeInMb } from '@utils/index';

// styles
import { Text, Flex } from '@styles/shared';
import { RenderFileContainer } from './StyledFileRender';

interface IRenderFileProps {
    file: {
        _id?: string;
        file_name: string;
        size: number; // in megs
    };
}

export const RenderFile: FunctionComponent<IRenderFileProps> = ({
    file: { file_name, size },
}) => {
    return (
        <RenderFileContainer>
            <Flex width="100%" align="center" justify="space-between">
                <Text>{file_name}</Text>
                <Text>{sizeInMb(size)}MB</Text>
            </Flex>
        </RenderFileContainer>
    );
};
