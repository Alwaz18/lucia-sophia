import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cardAnimation } from "../../animations";

function Testomonial({ date, name, review, feature }) {
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
        <m.div ref={ref}
            variants={cardAnimation} animate={controls} initial='hidden'
            className="bg-gray-100 bg-opacity-40 hover:bg-opacity-30 shadow-xl hover:shadow-2xl overflow-hidden  my-10 mx-6
        translate-y-0 transform transition duration-500 ease-in-out  hover:translate-y-2 cursor-pointer
        md:w-2/6 w-5/6 flex flex-col items-start justify-between px-6 py-4  rounded-xl h-64 md:h-60">
            <div className="w-full">
                <div className="w-full flex items-center justify-start m-1">
                    <span><CgProfile size={25} /></span>
                    <h2 className="px-2 txt-main custom-montserrat font-semibold text-base md:text-lg">
                        {name}</h2>
                </div>
                <p className="text-xs float-right m-1 text-gray-700 ">
                    {date}</p>
            </div>
           <div className="justify-self-start h-full">
           <h3 className="custom-montserrat font-semibold text-sm my-2 mx-1 py-1 text-gray-700 border-b border-red-600 ">
                {feature}</h3>
            <p className="custom-roboto text-sm my-2 mx-1 py-1 text-gray-700 ">
                {review}</p>
           </div>
        </m.div>
    )
}

export default Testomonial
