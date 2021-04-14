import React, { useState } from "react";
import { m } from "framer-motion";
import { wrap } from "popmotion";
import { boxVariants } from "../animations";
import Image from "next/image";


const Slider = ({ images }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className="center w-max">

            <div className="prev text-purple-500 md:bg-none border-indigo-300 bg-opacity-25 md:p-0 p-4 font-bold center hover:shadow-xl transform transition ease-in delay-300 hover:scale-105" onClick={() => paginate(-1)}>
                {"▶"}
            </div>
            <m.div className="min-h-full min-w-full center">

            <Image
                key={page}
                src={images[imageIndex]}
                width={530}
                height={500}
                variants={boxVariants}
                
                initial="enter"
                animate="center"
                className="bg-white bg-opacity-50 mx-4 rounded-xl shadow-xl"
                />
                </m.div>

            <div className="next text-purple-500 md:bg-none border-indigo-300 bg-opacity-40  md:p-0 p-4 center hover:shadow-xl transform transition ease-in delay-300 hover:scale-105" onClick={() => paginate(1)}>
                {"▶"}
            </div>
            
        </div>
    );
};
export default Slider