import { axios } from '@config/index';
import { AxiosResponse } from 'axios';
import { useFile } from '@context/FileProvider';
import { FunctionComponent, useState } from 'react';
import { IUploadedFileResponseWithDownloadLink } from '@context/FileProvider/FileProvider.types';

// styles
import { Button, Text, Alert, Container } from '@styles/shared';

// components
import { Dropzone, RenderFile } from '@components/index';

export const UploadFile: FunctionComponent = () => {
    const [{ selected_file }, fileDispatch] = useFile();
    const [error, setError] = useState('');
    const [uploadState, setUploadState] = useState<string>('Upload file');

    const uploadFile = async (file: File | null) => {
        if (!file) {
            setTimeout(() => setError(''), 2000);
            return setError('Please select a file');
        }
        setUploadState('Uploading file. Please wait');

        const formData = new FormData();
        formData.append('uploadedFile', file);
        try {
            const {
                data: {
                    data: { file: uploadedFile },
                },
            } = await axios.post<
                any,
                AxiosResponse<{
                    code: number;
                    success: boolean;
                    data: { file: IUploadedFileResponseWithDownloadLink };
                }>
            >('/api/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fileDispatch({
                type: 'updateUploadedFile',
                payload: { file: uploadedFile },
            });
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <Container width="400px">
            <Text as="h1" size="2rem" margin="0 0 2rem 0">
                Got a file? Share it like sonpapdi
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
            <Button onClick={() => uploadFile(selected_file)} width="400px">
                {uploadState}
            </Button>
        </Container>
    );
};
