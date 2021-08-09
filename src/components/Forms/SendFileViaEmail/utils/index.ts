import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { axios } from '@config/index';
import { AxiosResponse } from 'axios';

interface ISendEmailProps {
    fileId: string;
    emailFrom: string;
    emailTo: string;
}

export interface ISendEmailInitialState {
    sender: string;
    receiver: string;
    state: {
        error: boolean | null;
        message: string;
    };
}

export const updateEmail = (
    event: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<ISendEmailInitialState>>
) => {
    setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
    }));
};

export const initialEmailState = {
    state: { error: null, message: '' },
    sender: '',
    receiver: '',
};

export const setErrorAfterSendingEmail = ({
    success,
    state = initialEmailState,
    setState,
}: {
    success: boolean;
    state: ISendEmailInitialState;
    setState: Dispatch<SetStateAction<ISendEmailInitialState>>;
}) => {
    if (success)
        return setState((prevState) => ({
            ...initialEmailState,
            state: {
                error: false,
                message: `Your file has been shared successfully`,
            },
        }));
    return setState((prevState) => ({
        ...prevState,
        state: {
            error: true,
            message: `Your file share was unsuccessful. Please check the email address you provided.`,
        },
    }));
};

export const sendEmail = async (
    event: FormEvent,
    { emailTo, emailFrom, fileId }: ISendEmailProps
) => {
    event.preventDefault();
    try {
        const response = await axios.post<
            any,
            AxiosResponse<{
                code: number;
                success: boolean;
                data: { message: string };
            }>
        >(`/api/files/email`, {
            fileId,
            emailTo,
            emailFrom,
        });

        return response;
    } catch (error) {
        console.error(error);
    }
};
