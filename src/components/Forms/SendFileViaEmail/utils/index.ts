import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { axios } from '@config/index';
import { ServerResponse } from 'src/lib/types';
import { IFileAction } from '@context/FileProvider/FileProvider.types';

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

export const initialEmailState: ISendEmailInitialState = {
    state: { error: null, message: '' },
    sender: '',
    receiver: '',
};

export const setNotificationAfterSendingEmail = ({
    success,
    state = initialEmailState,
    setState,
}: {
    success: boolean;
    state: ISendEmailInitialState;
    setState: Dispatch<SetStateAction<ISendEmailInitialState>>;
}) => {
    if (success)
        setState((prevState) => ({
            ...state,
            state: {
                error: false,
                message: `Your file has been shared successfully`,
            },
        }));
    else
        setState((prevState) => ({
            ...prevState,
            state: {
                error: true,
                message: `Your file share was unsuccessful. Please check the email address you provided.`,
            },
        }));

    return setTimeout(
        () =>
            setState((prevState) => ({
                ...state,
                state: { error: false, message: '' },
            })),
        5000
    );
};

interface ITriggerEmailTransporterProps {
    event: FormEvent;
    setEmailStatus: Dispatch<SetStateAction<string>>;
    email: ISendEmailInitialState;
    uploaded_file: {
        _id: string;
        download_url: string;
    };
    setEmail: Dispatch<SetStateAction<ISendEmailInitialState>>;
    fileDispatch: (action: IFileAction) => void;
}

export const triggerEmailTransporter = async ({
    event,
    setEmailStatus,
    email,
    uploaded_file,
    setEmail,
    fileDispatch,
}: ITriggerEmailTransporterProps) => {
    setEmailStatus('Sharing your file. Please wait');
    const response = await sendEmail(event, {
        emailFrom: email?.sender,
        emailTo: email?.receiver,
        fileId: uploaded_file?._id,
    });

    if (response?.data?.success) {
        setEmail((prevState) => initialEmailState);
        setEmailStatus('File sharing successful');
        fileDispatch({ type: 'updateEmailShareState', payload: true });
    } else setEmailStatus('Share file via email');

    setNotificationAfterSendingEmail({
        success: response!.data.success,
        setState: setEmail,
        state: email,
    });
};

export const sendEmail = async (
    event: FormEvent,
    { emailTo, emailFrom, fileId }: ISendEmailProps
) => {
    event.preventDefault();
    try {
        const response = await axios.post<
            any,
            ServerResponse<{ message: string }>
        >(`/api/files/email`, {
            fileId,
            emailTo,
            emailFrom,
        });

        return response;
    } catch (error) {
        console.error(error);
        return {
            data: {
                success: false,
                message: 'Email was not sent. Please try again',
            },
        };
    }
};
