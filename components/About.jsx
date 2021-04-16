import Image from 'next/image'
import React from 'react'

function About({title, desc,logo}) {
    // const logoUrl =process.env.STRAPI_GRAPHQL_URL + logo
    return (
        <section className=" vh80 center w-full py-20 my-24">
           <div className="w-9/12 center flex-col p-2 ">
               <div className="center w-full divide-x-2 divide-red-500">
                   <h1 className="txt-main md:text-5xl text-3xl custom-montserrat px-4">{title}</h1>
                   <div className="w-max px-4">

               <Image 
            src={logo}
            height={150}
            width={150}
            className="rounded-xl shadow-xl  scale-x-95 scale-y-95 transform transition duration-500 ease-in-out  hover:scale-100"
            />
            </div>
               </div>
               <div className="center w-11/12 md:w-4/5 flex-col pt-8">
                <p className="txt-main md:text-base text-sm custom-montserrat font-medium md:px-1 py-2">{desc}</p>
               </div>

           </div>
        </section>
    )
}

export default About
