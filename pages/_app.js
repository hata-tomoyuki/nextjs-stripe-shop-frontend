import React from "react"
import App from "next/app"
import Head from "naxt/head"

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head></Head>
                <Component {...pageProps} />
            </>
        )
    }
}