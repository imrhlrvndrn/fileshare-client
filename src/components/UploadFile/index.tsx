import { triggerFileUpload } from './utils';
import { useFile } from '@context/FileProvider';
import { FunctionComponent, useState } from 'react';

// styles
import { Button, Text, Alert, Container } from '@styles/shared';

// components
import { Dropzone, RenderFile } from '@components/index';

export const UploadFile: FunctionComponent = () => {
    const [{ selected_file }, fileDispatch] = useFile();
    const [error, setError] = useState('');
    const [uploadState, setUploadState] = useState<string>('Upload file');

    return (
        <Container width="400px">
            <Text as="h1" size="2rem" margin="0 0 2rem 0">
                Got a file? Share it like soan papdi
            </Text>
            <Dropzone />
            {selected_file?.name && selected_file?.size && (
                <RenderFile
                    file={{
                        size: selected_file?.size,
                        file_name: selected_file?.name,
                    }}
                />
            )}
            {error && (
                <Alert variant="error" width="400px" margin="1rem 0 0 0">
                    {error}
                </Alert>
            )}
            <Button
                onClick={() =>
                    triggerFileUpload({
                        file: selected_file,
                        setError,
                        setState: setUploadState,
                        fileDispatch,
                    })
                }
                width="400px"
            >
                {uploadState}
            </Button>
        </Container>
    );
};
