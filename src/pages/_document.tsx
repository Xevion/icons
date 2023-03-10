import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head>
            </Head>
            <body>
                <script src="/js/darkmode.js" />
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
