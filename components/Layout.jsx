import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'
import { domMax, LazyMotion } from 'framer-motion'
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

function Layout({ children }) {
    const controls = useAnimation()
    const { ref, inView } = useInView()
    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        if (!inView) {
            controls.start('hidden')
        }
    }, [controls, inView])
    return (
        <LazyMotion features={domMax}>
            <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <link rel="icon" href="/favicon.webp" />
            <meta charSet="utf-8" />
            </Head>

            <Navbar />
            <m.section
            ref={ref} >

                {children}
            </m.section>
            <Footer />
        </LazyMotion>
    )
}

export default Layout
