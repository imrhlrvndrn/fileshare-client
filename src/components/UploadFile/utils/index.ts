import { axios } from '@config/index';
import {
    IFileAction,
    IUploadedFileResponseWithDownloadLink,
} from '@context/FileProvider/FileProvider.types';
import { Dispatch, SetStateAction } from 'react';
import { ServerResponse } from 'src/lib/types';

interface IUploadFileProps {
    file: File | null;
    setError: Dispatch<SetStateAction<string>>;
    setState: Dispatch<SetStateAction<string>>;
    fileDispatch: (action: IFileAction) => void;
}

const setUploadState = (
    setState: Dispatch<SetStateAction<string>>,
    state: string
) => {
    return setState(state);
};

const setErrorState = (
    setState: Dispatch<SetStateAction<string>>,
    error: string,
    duration = 5000
) => {
    return setTimeout(() => setState(error), duration);
};

export const triggerFileUpload = async ({
    file,
    setError,
    setState,
    fileDispatch,
}: IUploadFileProps) => {
    if (!file) {
        setErrorState(setError, '');
        return setErrorState(setError, 'Please select a file');
    }
    setUploadState(setState, 'Uploading file. Please wait');

    const formData = new FormData();
    formData.append('uploadedFile', file);
    try {
        const {
            data: {
                success,
                data: { file: uploadedFile },
            },
        } = await uploadFile(formData);

        if (success) {
            setUploadState(setState, 'File uploaded!');
            fileDispatch({
                type: 'updateUploadedFile',
                payload: { file: uploadedFile },
            });
        } else {
            setErrorState(
                setError,
                'File uploaded unsuccessful. Please try uploading the file again'
            );
            setTimeout(() => setErrorState(setError, ''), 5000);
            setUploadState(setState, 'Upload file');
        }
    } catch (error) {
        setErrorState(
            setError,
            'File uploaded unsuccessful. Please try uploading the file again'
        );
        setTimeout(() => setErrorState(setError, ''), 5000);
        setUploadState(setState, 'Upload file');
        console.error(error);
    }
};

const uploadFile = async (formData: FormData) => {
    const response = await axios.post<
        any,
        ServerResponse<{ file: IUploadedFileResponseWithDownloadLink }>
    >('/api/files/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response;
};
