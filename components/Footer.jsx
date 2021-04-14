import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa'

function Footer() {
    return (
        <footer className='vh40 mainbg mt-64 center flex-wrap h-full w-full'>
            <div className="flex md:justify-between justify-center flex-wrap items-start  h-full w-5/6">

                {/* <div>
                    <img src="./static/brandLogo.jepg" height={200} />
                </div> */}

                <div className=" flex flex-col items-center justify-start h-full  md:w-1/3 w-3/4 my-4">
                    <div className="center flex-col">
                        <h2 className="custom-montserrat txt-main font-semibold text-lg md:text-xl pb-2 md:pb-4">Contact us</h2>
                        <p className="custom-roboto font-semibold cursor-pointer scale-100 transform transition duration-500 ease-in-out  hover:scale-105
                     text-gray-400 hover:text-red-400  text-sm px-8 py-4 rounded-2xl border border-red-600">
                            support@luciasophia.com</p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start h-full md:w-1/3 w-1/2 px-4 py-6">

                    <h1 className="custom-montserrat txt-main font-semibold text-lg md:text-xl">Follow us at</h1>
                    <div className="container flex justify-around items-center">
                        <ul className="px-6 center">

                            <li className="px-4 py-6 shadow-2xl rounded-full
             ">
                                <a href="https://m.facebook.com/LuciaSophiaInternational/" target="_blank">

                                    <FaFacebook size={30}
                                        className="text-blue-500 rounded-full hover:shadow-2xl shadow-lg"
                                    />
                                </a>
                            </li>
                            <li className="px-4 py-6 shadow-2xl rounded-full
             ">
                                <a href="https://www.instagram.com/luciasophia_natural_lifestyle/" target="_blank">

                                    <FaInstagram size={30}
                                        className="text-purple-500 rounded-full hover:shadow-2xl shadow-lg"
                                    />
                                </a>
                            </li>
                            <li className="px-4 py-6 shadow-2xl rounded-full
             ">
                                <a href="https://www.pinterest.com/LuciaSophiaInternational/" target="_blank">

                                    <FaPinterest size={30}
                                        className="text-red-600 rounded-full hover:shadow-2xl shadow-lg"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-col center h-full md:w-1/3 w-1/2 px-4 py-6">
                    <h4 className="text-lg md:text-xl txt-main font-semibold custom-montserrat pb-2">Quick links</h4>
                    <ul>
                        <li><Link href="/#hot"><a className="text-sm custom-roboto text-gray-400 hover:text-gray-600">Top products</a></Link></li>
                        <li><Link href="/#hot"><a className="text-sm custom-roboto text-gray-400 hover:text-gray-600">Testimonials</a></Link></li>
                    </ul>
                </div>
            </div>
            <p className="custom-montserrat p-2 md:text-sm text-xs self-end justify-start min-w-full text-gray-400">© 2021 Lucia Sophia. All Rights Reserved.</p>

        </footer>
    )
}

export default Footer
