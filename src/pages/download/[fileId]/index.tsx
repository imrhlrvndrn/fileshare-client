import Head from 'next/head';
import { axios } from '@config/index';
import fileDownload from 'js-file-download';
import { IFileResponse } from 'src/lib/types';
import { GetServerSidePropsContext, NextPage } from 'next';

// icons
import { DownloadIcon } from '@icons/DownloadIcon';

// styles
import { Button, Flex, Text } from '@styles/shared';
import { DownloadContainer } from '../../../styles/pages/StyledDownload';

// components
import { BasicLayout } from '@layouts/index';
import { RenderFile } from '@components/index';

const Download: NextPage<{ file: IFileResponse }> = ({ file }) => {
    const downloadFile = async () => {
        const fileResponse = await axios.get(
            `/api/files/${file._id}/download`,
            {
                responseType: 'blob',
            }
        );
        const { data } = fileResponse;
        console.log('downloaded file response obj => ', fileResponse);
        fileDownload(data, file.file_name);
    };

    if (!file._id)
        return (
            <Flex as="h1" align="center" justify="center" height="100vh">
                404{' '}
                <Text as="span" margin="0 1rem" size="4rem" weight="400">
                    |
                </Text>{' '}
                Oops! The file does not exist
            </Flex>
        );

    return (
        <BasicLayout>
            <Head>
                <title>Fileshare | Download</title>
            </Head>

            <Flex align="center" justify="center" height="100vh">
                <DownloadContainer>
                    <Flex justify="center" margin="0 0 1rem 0">
                        <DownloadIcon size={40} />
                    </Flex>
                    <Text as="h2" weight="600" size="1.1rem" align="center">
                        Your file is ready to be downloaded!
                    </Text>
                    <RenderFile file={file} />
                    <Button width="100%" onClick={downloadFile}>
                        Download file
                    </Button>
                </DownloadContainer>
            </Flex>
        </BasicLayout>
    );
};

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    const { fileId } = context.query;

    let file;
    try {
        const {
            data: { data },
        } = await axios.get(`/api/files/${fileId}`);
        file = data.file;
    } catch (error) {
        console.error(error);
        file = {};
    }

    return {
        props: {
            file,
        },
    };
};

export default Download;
