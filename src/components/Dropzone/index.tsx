import { useDropzone } from 'react-dropzone';
import { useFile } from '@context/FileProvider';
import { Dispatch, FunctionComponent, useCallback } from 'react';

// icons
import { FileIcon } from '@icons/FileIcon';
import { FileAcceptIcon } from '@icons/FileAcceptIcon';
import { FileRejectIcon } from '@icons/FileRejectIcon';

// styles
import { Flex, Text } from '@styles/shared';
import { StyledDropzone } from './StyledDropzone';

export const Dropzone: FunctionComponent = () => {
    const [_, fileDispatch] = useFile();
    const onDrop = useCallback((acceptedFiles) => {
        fileDispatch({
            type: 'updateSelectedFile',
            payload: { file: acceptedFiles[0] },
        });
    }, []);

    const {
        getInputProps,
        getRootProps,
        isDragAccept,
        isDragReject,
        isDragActive,
    } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/jpeg, image/png',
    });

    const renderDraggable = (): JSX.Element => {
        if (isDragActive && isDragAccept)
            return (
                <>
                    <FileAcceptIcon size={40} />
                    <Text as="h2" size="1.2rem" weight="600" margin="1rem 0">
                        Drop your file here
                    </Text>
                </>
            );

        if (isDragActive && isDragReject)
            return (
                <>
                    <FileRejectIcon size={40} />
                    <Text as="h2" size="1.2rem" weight="600" margin="1rem 0">
                        Invalid file type
                    </Text>
                    <Text align="center">We only accept jpeg, png files</Text>
                </>
            );

        return (
            <>
                <FileIcon size={40} />
                <Text
                    align="center"
                    as="h2"
                    size="1.2rem"
                    weight="600"
                    margin="1rem 0"
                >
                    Drag &amp; drop some files here, or click to select files
                </Text>
                <Text size="0.8rem" align="center">
                    Only jpeg, png files are acceptable.
                </Text>
            </>
        );
    };

    return (
        <StyledDropzone
            {...getRootProps()}
            background={
                isDragAccept ? '#B0FCC1' : isDragReject ? '#FFADAD' : '#f4f4f4'
            }
        >
            <Flex
                width="100%"
                height="100%"
                direction="column"
                align="center"
                justify="center"
            >
                <input {...getInputProps()} type="file" />
                {renderDraggable()}
            </Flex>
        </StyledDropzone>
    );
};
