import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>File Share</title>
                <meta
                    name="description"
                    content="Share files with your friends via email or sharable links"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                </a>
            </footer>
        </div>
    );
}
