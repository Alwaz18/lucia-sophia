import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


function viewAnimate() {
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
   
}

export default viewAnimate
