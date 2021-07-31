import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../context/ThemeProvider';

function MyApp({ Component, pageProps }: AppProps) {
    const [{ theme }] = useTheme();

    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
export default MyApp;
