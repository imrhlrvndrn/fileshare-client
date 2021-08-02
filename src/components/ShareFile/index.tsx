import { useFile } from '@context/FileProvider';
import { Fragment, FunctionComponent } from 'react';

// styles
import { Flex, Text } from '@styles/shared';
import { ShareFileContainer } from './StyledShareFile';
import { CopyIcon } from '@icons/CopyIcon';

export const ShareFile: FunctionComponent = (): JSX.Element => {
    const [{ uploaded_file }, fileDispatch] = useFile();

    return (
        <Fragment>
            <Text as="h1" size="2rem" weight="800" margin="0 0 2rem 0">
                Share file
            </Text>
            <ShareFileContainer>
                <Text as="h2" weight="600" size="1.5rem">
                    Download link
                </Text>
                <Text margin="0 0 1rem 0" size=".9rem">
                    Share this link with your friends
                </Text>
                <div style={{ background: '#eee', padding: '1rem' }}>
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
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    uploaded_file?.download_url
                                );
                            }}
                        >
                            <CopyIcon size={28} />
                        </button>
                    </Flex>
                </div>
            </ShareFileContainer>
            <Text weight="600" size="1rem" margin="1rem 0">
                OR
            </Text>
            {/* <ShareViaEmail></ShareViaEmail> */}
        </Fragment>
    );
};
