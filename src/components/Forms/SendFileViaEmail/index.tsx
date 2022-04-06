import { useState } from 'react';

// styles
import { Alert, Button, Container } from '@styles/shared';
import {
    initialEmailState,
    ISendEmailInitialState,
    triggerEmailTransporter,
    updateEmail,
} from './utils';
import { useFile } from '@context/FileProvider';

export const SendFileViaEmail = () => {
    const [{ uploaded_file }, fileDispatch] = useFile();
    const [emailStatus, setEmailStatus] = useState('Share file via email');
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
                <Alert
                    margin="0 0 1rem 0"
                    variant={email.state.error ? 'error' : 'success'}
                >
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
                    onClick={(event) =>
                        triggerEmailTransporter({
                            event,
                            setEmail,
                            setEmailStatus,
                            email,
                            uploaded_file,
                            fileDispatch
                        })
                    }
                >
                    {emailStatus}
                </Button>
            </form>
        </Container>
    );
};
