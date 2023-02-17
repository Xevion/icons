import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Main/>
                <NextScript/>
                <Script strategy="beforeInteractive" id="automatic-darkmode" src="/js/darkmode.js"/>
            </body>
        </Html>
    )
}