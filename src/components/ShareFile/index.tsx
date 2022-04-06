import { FunctionComponent, Fragment } from 'react';

// styles
import { Button, Container, Text } from '@styles/shared';
import { SendFileViaEmail, DownloadFile } from '@components/index';
import { useFile } from '@context/FileProvider';

export const ShareFile: FunctionComponent = (): JSX.Element => {
    const [{ email_share_state }, fileDispatch] = useFile();

    return (
        <Container width="400px">
            <Text
                as="h1"
                size="2rem"
                align="center"
                weight="800"
                margin="0 0 2rem 0"
            >
                File uploaded successfully! 🥳
            </Text>
            <DownloadFile />
            {!email_share_state ? (
                <Fragment>
                    <Text
                        weight="600"
                        size="1rem"
                        margin="1rem 0"
                        align="center"
                    >
                        OR
                    </Text>
                    <SendFileViaEmail />
                </Fragment>
            ) : (
                <Button
                    width="100%"
                    onClick={() =>
                        fileDispatch({
                            type: 'updateUploadedFile',
                            payload: {
                                file: {
                                    _id: '',
                                    download_url: '',
                                },
                            },
                        })
                    }
                >
                    Upload another file?
                </Button>
            )}
        </Container>
    );
};
