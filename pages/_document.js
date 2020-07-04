import Document, { Html, Head, Main, NextScript } from 'next';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Simple Messaging App</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
