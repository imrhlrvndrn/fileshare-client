import { Dropzone, RenderFile } from '@components/index';
import { axios } from '@config/index';
import { useFile } from '@context/FileProvider';
import { IUploadedFileResponseWithDownloadLink } from '@context/FileProvider/FileProvider.types';
import { Button, Text } from '@styles/shared';
import { AxiosResponse } from 'axios';
import { Fragment, FunctionComponent, useState } from 'react';

export const UploadFile: FunctionComponent = () => {
    const [{ selected_file }, fileDispatch] = useFile();
    const [uploadState, setUploadState] = useState<string>('Upload file');

    const uploadFile = async (file: File) => {
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
            >('/files/upload', formData, {
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
        <Fragment>
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
            <Button
                onClick={() => {
                    setUploadState('Uploading file ...')
                    selected_file && uploadFile(selected_file)
                }}
                width="400px"
            >
                {uploadState}
            </Button>
        </Fragment>
    );
};
