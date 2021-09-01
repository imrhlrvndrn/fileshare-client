import { FunctionComponent } from 'react';

// styles
import { Container, Text } from '@styles/shared';
import { SendFileViaEmail, DownloadFile } from '@components/index';

export const ShareFile: FunctionComponent = (): JSX.Element => {
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
            <Text weight="600" size="1rem" margin="1rem 0" align="center">
                OR
            </Text>
            <SendFileViaEmail />
        </Container>
    );
};
