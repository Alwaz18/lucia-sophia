import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cardAnimation} from "../../animations";
import { AiFillTags } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'


function DisplayProduct({
  path,
  alt,
  title,
  description,
  price,
  link,
  inStock,
  hot,
  slug,
  new: pNew,

}) {
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
  // let imgUrl = `"https://rocky-ocean-85600.herokuapp.com${path}`;
  let show = hot ? '' : 'hidden'
  let stockCol = inStock ? 'text-green-600' : "text-red-600"
  let stockTxt = inStock ? 'In stock' : "Out of stock"
  return (
    <m.div ref={ref}
    variants={cardAnimation} animate={controls} initial='hidden'
      className="md:w-1/4 w-5/12 md:m-5 lg:m-10 m-2  rounded-xl  center flex-col
    bg-gray-100 bg-opacity-40 hover:bg-opacity-30 shadow-xl  hover:shadow-2xl overflow-hidden 
       translate-y-0 transform transition duration-500 ease-in-out  hover:translate-y-2"
    >
      <div className="overflow-hidden min-h-full">
        {" "}
        <Image
          src={path || "/def.jpg"}
          alt={alt}
          width={500}
          height={330}
          className="rounded-xl shadow-xl min-h-full object-fill
          scale-100 transform transition duration-500 ease-in-out  hover:scale-110"
        />
      </div>
      <div className="flex  flex-col items-start justify-center md:justify-between p-1 md:px-2 px-1 md:pl-2  divide-y divide-solid divide-red-600  min-w-full">
        <div className="w-full flex  justify-between items-center">
          <div className="flex flex-col items-start md:m-0  cursor-pointer">
            <h3 className="md:m-0 my-1 txt-main custom-montserrat font-semibold text-base md:text-xl lg:text-2xl md:py-2
                    align-self-baseline 
                    ">{title}</h3>
            <p className={` custom-montserrat md:text-xs text-xs md:font-bold ${stockCol}`}>{stockTxt}</p>
            <p className=" lg:text-base md:text-xs py-1 text-xs font-semibold transpara txt-gradient bg-gradient-to-r from-gray-700 to-gray-900 center"><AiFillTags/> ${price}</p>
          </div>
          {pNew && <span className="mx-2 px-2 py-1 rounded-xl text-gray-700 shadow-md
                    custom-montserrat md:font-bold font-semibold text-xs animate-bounce bg-gradient-to-br from-yellow-300 to-yellow-600 cursor-pointer">
            New
                        </span>}
        </div>
        <div className="md:m-0 my-1 align-self-center cursor-pointer overflow-ellipsis">

          <p className="lg:text-sm text-xs  text-gray-900 custom-montserrat overflow-ellipsis align-top font-medium min-w-full py-2">{description}</p>
          <div className=" py-1 flex flex-wrap items-center md:h-20  justify-start  cursor-pointer">
            <Button><a rel="noopener noreferrer" target="_blank" className="lg:text-base text-xs  w-full lg:w-max center" href={link}> <BiShoppingBag/>  Buy Now </a></Button>
            <Button><Link href={`/products/${slug}`}><a rel="noopener noreferrer " className="lg:text-base text-xs w-full lg:w-max ">View Product</a></Link></Button>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default DisplayProduct;
