import { client } from "../../lib/apollo";
import { GET_PRODUCT_SLUGS, GET_PRODUCT_DETAILS } from "../../lib/queries";
import { useQuery } from '@apollo/client'
import Head from 'next/head'
import Button from "../../components/common/Button";
import MarkdownIt from 'markdown-it'
import InnerHtml from 'dangerously-set-html-content'
import { AiFillTags } from 'react-icons/ai'
import LogoLoader from "../../components/common/LogoLoader";
import Slider from "../../components/Slider";
import Testomonial from "../../components/common/Testomonial";
import { m } from "framer-motion";
import { BiShoppingBag } from 'react-icons/bi'
import { container } from "../../animations";

function product({ detail }) {

    let md = new MarkdownIt()

    const {
        title,
        new: pNew,
        price,
        description,
        inStock,
        image,
        reviews,
        meta_title,
        productDescription,
        meta_description,
        productLink,
        perks } = detail
    const mdPerks = md.render(perks)
    const mdDesc = md.render(productDescription)
    let stockCol = inStock ? 'text-green-600' : "text-red-600"
    let stockTxt = inStock ? 'In stock' : "Out of stock"
    let imgList = []
    let makeList = image.map(({ url }) => imgList.push(url))
    // let newImageList=[...imgList, makeList]
    // console.log(imgList, "imgLisk", makeList,"makeList", newImageList,"newImg")
    const { data, loading } = useQuery(GET_PRODUCT_DETAILS)
    if (loading) {
        <LogoLoader />
    }

    return (
        <section className="min-h-screen">
            <Head>
                <title>{title}</title>

                <meta property="og:title" content={title} key="ogtitle" />
+       <meta property="og:description" content={meta_description || description} key="ogdesc" />
                <meta property="og:site_name" content={meta_title || title} key="ogsitename" />

 +       <meta name="description" content={description} />

            </Head>
            <main className="md:pt-14 pt-10 min-w-full min-h-screen overflow-hidden ">
                <section className="min-w-full min-h-screen center">
                    <div className='m-2 min-w-full min-h-full flex items-center justify-start flex-wrap w-full py-12 px-5 md:py-24'>
                        <div className="md:w-1/2 md:h-4/5 m-1 md:m-2 w-full h-2/6 center">
                            <Slider images={imgList} />
                            <div>
                                { }
                            </div>
                        </div>
                        <m.div variants={container}
                            initial="hidden"
                            animate="visible"
                            className="self-start justify-self-start w-full px-4  md:px-0 md:w-5/12 min-h-full divide-y divide-solid divide-red-600 ">

                            <div className="flex flex-col items-start md:m-0  cursor-pointer">
                                <h3 className="md:m-0 my-1 txt-main custom-montserrat font-semibold text-base md:text-xl lg:text-2xl md:py-2 align-self-baseline ">
                                    {title}</h3>
                                {pNew && <span className="m-2 px-2 py-1 rounded-xl text-gray-700 shadow-md custom-montserrat md:font-bold font-medium text-xs animate-bounce bg-gradient-to-br from-yellow-300 to-yellow-600 cursor-pointer ">
                                    New</span>}
                                <div className="flex items-center justify-between w-full pr-4">

                                    <p className={` custom-montserrat md:text-sm text-xs md:font-bold ${stockCol}`}>{stockTxt}</p>
                                    <p className=" lg:text-base md:text-xs py-1 text-xs font-semibold transpara txt-gradient bg-gradient-to-r from-gray-700 to-gray-900 center"><AiFillTags /> ${price}</p>
                                </div>
                            </div>
                            <div className="md:m-0 my-1 align-self-center cursor-pointer overflow-ellipsis">

                                <p className="lg:text-sm text-xs  text-gray-800 custom-montserrat overflow-ellipsis align-top font-semibold min-w-full py-2">{description}</p>
                                <article className="lg:text-sm text-xs  text-gray-800 custom-roboto overflow-ellipsis align-top font-medium min-w-full py-2">
                                    <InnerHtml html={mdPerks} />
                                </article>
                                <Button><a rel="noopener noreferrer" className="lg:text-base text-xs  w-full  center" target="_blank" rel="noopener noreferrer" href={productLink}><BiShoppingBag />  Buy Now On Amazon</a></Button>
                            </div>

                        </m.div>
                        <div></div>
                    </div>
                </section>
                <div className="w-full h-full px-10 py-16 divide-y divide-solid divide-red-600">
                    <h2 className="md:m-0 my-1 txt-main custom-montserrat font-semibold text-base md:text-xl lg:text-2xl md:py-2 align-self-baseline ">
                        Product's description</h2>

                    <article className="lg:text-sm text-xs  text-gray-800 custom-roboto overflow-ellipsis align-top font-medium md:w-3/4  min-w-full py-2">
                        <InnerHtml html={mdDesc} />
                    </article>
                </div>
                <m.section
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="vh80 center flex-col">
                    <h1 className="txt-main text-4xl">"Testimonials"</h1>
                    <div className="w-full h-full flex flex-wrap items-center justify-around">
                        {reviews.map(({ name, date, feature, testimonial, id }) =>
                            <Testomonial key={id} name={name}
                                date={date} feature={feature}
                                review={testimonial}
                            />
                        )}
                    </div>
                </m.section>
            </main>
        </section>
    )
}

export async function getStaticPaths() {
    const { data } = await client.query({
        query: GET_PRODUCT_SLUGS,
    });

    const paths = data?.products.map(({ slug }) => `/products/${slug}`)

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const { data } = await client.query({
        query: GET_PRODUCT_DETAILS,
        variables: { slug },
    });
    return {
        props: {
            detail: data?.products[0]
        },
        revalidate: 5
    };
}

export default product
