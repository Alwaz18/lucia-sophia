import React, { useEffect } from 'react';
import Image from 'next/image'
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gallery } from '../animations';
function Gallery({ srcOne, srcTwo, txtOne, txtTwo }) {
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
        <m.section ref={ref}
            variants={gallery} animate={controls} initial='hidden'
            className="w-full min-h-screen center flex-wrap">
            <div className="flex items-center justify-around min-w-full">
                <div className="w-2/6">
                    <Image
                        src={srcOne}
                        height={500}
                        width={350}
                        className="object-cover shadow-lg  scale-100 transform transition duration-500 ease-in-out  hover:scale-105"
                    />
                </div>
                <div className="w-1/2">
                    <h4 className="txt-main text-base md:text-xl custom-roboto text-center">
                        {txtOne}</h4>
                </div>
            </div>
            <div className="flex items-center justify-around min-w-full">

                <div className="w-1/2">
                    <h4 className="txt-main text-base md:text-xl custom-roboto txt-shd text-center">
                        {txtTwo}</h4>
                </div>
                <div className="w-2/6 text">
                    <Image
                        src={srcTwo}
                        height={500}
                        width={350}
                        className="object-cover shadow-lg   scale-100 transform transition duration-500 ease-in-out  hover:scale-105"
                    />
                </div>
            </div>
        </m.section>
    );
}

export default Gallery;