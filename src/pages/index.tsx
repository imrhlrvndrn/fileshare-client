import Head from 'next/head';
import { useEffect } from 'react';
import { useFile } from '@context/FileProvider';
import { useTheme } from '../context/ThemeProvider';

// styles
import { Flex } from '@styles/shared';

// components
import { BasicLayout } from '@layouts/index';
import { ShareFile } from '@components/ShareFile';
import { UploadFile } from '@components/UploadFile';

export default function Home() {
    const [{ uploaded_file, email_share_state }, fileDispatch] = useFile();

    useEffect(() => {
        if (uploaded_file?.download_url)
            fileDispatch({
                type: 'updateSelectedFile',
                payload: { file: null },
            });
    }, [uploaded_file, fileDispatch]);

    return (
        <BasicLayout>
            <Head>
                <title>File Share</title>
                <meta
                    name="description"
                    content="Share files with your friends via email or sharable links"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Flex
                    width="100%"
                    padding="2rem 0"
                    minHeight="100vh"
                    align="center"
                    justify="center"
                    direction="column"
                >
                    {uploaded_file?.download_url ? (
                        <ShareFile />
                    ) : (
                        <UploadFile />
                    )}
                </Flex>
            </main>
        </BasicLayout>
    );
}
