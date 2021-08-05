import { FormEvent, useState } from 'react';

// styles
import { Alert, Button, Container } from '@styles/shared';
import {
    initialEmailState,
    ISendEmailInitialState,
    sendEmail,
    setErrorAfterSendingEmail,
    updateEmail,
} from './utils';
import { useFile } from '@context/FileProvider';

export const SendFileViaEmail = () => {
    const [{ uploaded_file }] = useFile();
    const [email, setEmail] =
        useState<ISendEmailInitialState>(initialEmailState);

    const labelStyles = {
        display: 'block',
    };

    const inputStyles = {
        display: 'block',
        margin: '0.8rem 0 1rem 0',
    };

    return (
        <Container background="#f4f4f4" padding="2rem">
            {email?.state?.message && (
                <Alert variant={email.state.error ? 'error' : 'success'}>
                    {email.state.message}
                </Alert>
            )}
            <form>
                <label htmlFor="sender" style={labelStyles}>
                    Your email
                    <input
                        style={inputStyles}
                        type="email"
                        id="sender"
                        name="sender"
                        placeholder="Your email"
                        value={email.sender}
                        onChange={(event) => updateEmail(event, setEmail)}
                    />
                </label>
                <label htmlFor="receiver" style={labelStyles}>
                    Friends email
                    <input
                        style={inputStyles}
                        type="email"
                        name="receiver"
                        id="receiver"
                        placeholder="Friend's email"
                        value={email.receiver}
                        onChange={(event) => updateEmail(event, setEmail)}
                    />
                </label>
                <Button
                    width="100%"
                    type="submit"
                    onClick={async (event) => {
                        const response = await sendEmail(event, {
                            emailFrom: email?.sender,
                            emailTo: email?.receiver,
                            fileId: uploaded_file?._id,
                        });

                        setErrorAfterSendingEmail({
                            success: response!.data.success,
                            setState: setEmail,
                            state: email,
                        });
                    }}
                >
                    Send file via email
                </Button>
            </form>
        </Container>
    );
};
