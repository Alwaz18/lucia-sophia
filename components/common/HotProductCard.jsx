import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { cardAnimation } from '../../animations';
import { AiFillTags } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'



function HotProductCard({ imgUrl, desc, title, price, link, hot, newProd, inStock, slug }) {
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
    // let Url = process.env.STRAPI_GRAPHQL_URL +imgUrl
    let show = hot ? '' : 'hidden'
    let stockCol = inStock ? 'text-green-600' : "text-red-600"
    let stockTxt = inStock ? 'In stock' : "Out of stock"
    return (
        <m.div ref={ref} variants={cardAnimation} animate={controls} initial='hidden'  whileTap={{ scale: 1.1 }} className={`rounded-xl 
        center flex-col md:flex-row items-baseline
        bg-gray-100 bg-opacity-40 hover:bg-opacity-30 shadow-xl hover:shadow-2xl overflow-hidden  my-10
        w-11/12 xs:w-7/12  md:w-3/4 md:grid grid-flow-row grid-cols-5  md:place-items-start md:place-content-center h-full
        translate-y-0 transform transition duration-500 ease-in-out  hover:translate-y-2 ${show}`}>
            <div className="overflow-hidden h-full md:col-start-1 md:col-span-2 
            md:bg-center md:bg-cover
            md:flex
            ">
                <Image
                    src={imgUrl || NEXT_PUBLIC_DEFAULT_IMAGE}
                    alt={title}
                    width={350}
                    height={300}
                    className="rounded-2xl shadow-xl w-max object-fill absolute lg:min-h-full
                    scale-100 transform transition duration-500 ease-in-out  hover:scale-110 "
                />
            </div>
            <div className="md:col-start-3 md:col-span-3 flex  flex-col items-start justify-center md:justify-between py-1 px-4 md:pl-2 divide-y divide-solid divide-red-600 min-w-full">
                <div className="w-full flex md:p-0  justify-between items-center">
                    <div className="flex flex-col items-start md:m-0 my-1 cursor-pointer">
                        <h3 className="md:m-0 my-1 txt-main custom-montserrat font-semibold text-base md:text-xl lg:text-2xl md:py-2
                    align-self-baseline 
                    ">{title}</h3>
                        <p className={`md:m-0 my-1 custom-montserrat md:text-xs text-xs md:font-bold ${stockCol}`}>{stockTxt}</p>
                        <p className="md:m-0 my-1 lg:text-base md:text-xs py-2 font-semibold transpara txt-gradient bg-gradient-to-r from-gray-700 to-gray-900 center"><AiFillTags/> ${price}</p>
                    </div>
                    {newProd && <span className="mx-2 px-2 py-1 rounded-xl text-gray-700 shadow-md
                    custom-montserrat font-bold text-xs animate-bounce bg-gradient-to-br from-yellow-300 to-yellow-600 cursor-pointer">
                        New
                        </span>}
                </div>
                <div className="md:m-0 my-1 align-self-center cursor-pointer overflow-ellipsis">

                    <p className="lg:text-sm text-xs  text-gray-900 custom-montserrat overflow-ellipsis align-top font-medium min-w-full py-2">{desc}</p>
                    <div className=" py-1 flex flex-wrap items-center md:h-20 lg:h-32 justify-start  cursor-pointer">
                        <Button><a rel="noopener noreferrer" target="_blank" className="lg:text-base text-xs  w-full lg:w-max center" href={link}><BiShoppingBag/>  Buy Now </a></Button>
                        <Button><Link 
                         passHref={true} 
                        href={`/products/${slug}`}><a rel="noopener noreferrer" className="lg:text-base text-xs  w-full lg:w-max ">View Product</a></Link></Button>
                    </div>
                </div>
            </div>
        </m.div>
    )
}

export default HotProductCard
