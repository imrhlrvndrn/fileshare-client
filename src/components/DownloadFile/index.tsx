import { useFile } from '@context/FileProvider';

// styles
import { Container, Flex, Text } from '@styles/shared';

// components
import { CopyIcon } from '@icons/CopyIcon';

export const DownloadFile = () => {
    const [{ uploaded_file }] = useFile();

    return (
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
                        {uploaded_file?.download_url}
                    </Text>
                    <button
                        style={{ width: '20%', padding: '0 0 0 2rem' }}
                        onClick={() => {
                            navigator.clipboard.writeText(
                                uploaded_file?.download_url
                            );
                        }}
                    >
                        <CopyIcon size={20} />
                    </button>
                </Flex>
            </Container>
        </Container>
    );
};
