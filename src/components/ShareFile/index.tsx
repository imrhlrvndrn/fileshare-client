import { useFile } from '@context/FileProvider';
import { Fragment, FunctionComponent } from 'react';

// styles
import { Container, Flex, Text } from '@styles/shared';
import { ShareFileContainer } from './StyledShareFile';
import { CopyIcon } from '@icons/CopyIcon';
import { SendFileViaEmail } from '@components/Forms';

export const ShareFile: FunctionComponent = (): JSX.Element => {
    const [{ uploaded_file }, fileDispatch] = useFile();

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
            <Container padding="2rem" width="400px" background="#f4f4f4">
                <Text as="h2" weight="600" size="1.5rem">
                    Download link
                </Text>
                <Text margin="0 0 1rem 0" size=".9rem">
                    Share this link with your friends
                </Text>
                <Container background="#eee" padding="1rem">
                    <Flex width="100%" justify="space-between" align="center">
                        <Text
                            as="span"
                            size="0.8rem"
                            style={{
                                width: '80%',
                                wordBreak: 'break-word',
                            }}
                        >
                            {uploaded_file?.download_url}{' '}
                        </Text>
                        <button
                            style={{ width: '20%' }}
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    uploaded_file?.download_url
                                );
                            }}
                        >
                            <CopyIcon size={28} />
                        </button>
                    </Flex>
                </Container>
            </Container>
            <Text weight="600" size="1rem" margin="1rem 0" align="center">
                OR
            </Text>
            <SendFileViaEmail />
        </Container>
    );
};
