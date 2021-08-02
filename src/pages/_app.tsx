import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { ThemeContextProvider, useTheme } from '../context/ThemeProvider';
import { initialTheme } from '../constants';
import { FileProvider } from '@context/FileProvider';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextProvider>
            <FileProvider>
                <GlobalStyles />
                <ThemeProvider theme={initialTheme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </FileProvider>
        </ThemeContextProvider>
    );
}
export default MyApp;
