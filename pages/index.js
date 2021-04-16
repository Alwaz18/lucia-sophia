import Head from "next/head";
import { client } from "../lib/apollo";
import { GET_ABOUT_US, GET_LANDING_PAGE } from "../lib/queries";
import { useQuery } from "@apollo/client";
import Background from "../components/common/Background";
import HotProductCard from "../components/common/HotProductCard";
import About from "../components/About";
import { m, useAnimation } from "framer-motion";
import { boxVariants, container, item, tagL } from "../animations";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import LogoLoader from "../components/common/LogoLoader";
import SlideShow from "../components/SllideShow";

export default function Home({ main, Products, about }) {
  const images = ["https://res.cloudinary.com/dewxikysw/image/upload/v1618453394/show_fiyybg.jpg",
    "https://res.cloudinary.com/dewxikysw/image/upload/c_scale,h_1128/v1618453363/slide_cbrak6.jpg",
    "https://res.cloudinary.com/dewxikysw/image/upload/v1618442750/comp_cyllyz.jpg"];
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

  const { data, loading, error } = useQuery(GET_LANDING_PAGE);
  if (loading) return <LogoLoader />
  if (error) return <h1>Error Occured</h1>


  return (
    <section className=" w-full">
      <Head>
        <title>Lucia Sophia</title>

        <meta property="og:title" content={main.title} key="ogtitle" />
+       <meta property="og:description" content={about.about} key="ogdesc" />
        <meta property="og:site_name" content={main.title} key="ogsitename" />

 +       <meta name="description" content={about.about} />

      </Head>

      <main className="min-h-screen w-full ">
        <section className="h-full bg-fixed flex min-h-screen">


          <div className="flex flex-col justify-center items-start
            absolute z-10
           px-14 py-10 w-3/5 h-full">
            <h1 className="md:text-6xl text-3xl font-semibold text-yellow-500 my-5 cursor-pointer">
              {/* {main.title} */}
              Made with love!
            </h1>
            <m.h3 variants={tagL} initial="hidden"
              animate="visible" className="text-shd md:text-xl text-ll custom-montserrat text-yellow-500 font-semibold px-1 cursor-pointer">
              {/* {main.tagline} */}
              Lucia Sophia is a fun, all-natural take on popular kitchen, household and everyday products. Providing organic, diverse and authentic products for people who love an All Natural Lifestyle.
            </m.h3>

          </div>
        
         <SlideShow 
          images={images}
          alt={images}
          />
          {/* <div className="">
            <Image
              src="https://res.cloudinary.com/dewxikysw/image/upload/v1618442750/comp_cyllyz.jpg"
              // height={600}
              // width={800}
              layout="fill"
            />
          </div> */}

        </section>
        <m.section ref={ref} variants={boxVariants} animate={controls} initial='hidden' id="about"
          className="my-20 center w-full h-full">
          <About
            title={about.title}
            desc={about.about}
            logo={about.logo.url}
          />
        </m.section>
        <m.section id='hot'
          variant={item}
          initial="hidden"
          animate="visible"
          className="w-full h-full center flex-col">
          <h1 className="md:text-5xl text-3xl txt-main py-14">Best Selling Products</h1>
          {Products.map((item) =>
            <HotProductCard key={item.id} inStock={item.inStock}
              slug={item.slug} newProd={item.new} hot={item.hot} imgUrl={item.heroImg.url}
              slug={item.slug} title={item.title} desc={item.description} price={item.price} link={item.productLink} />
          )}
        </m.section>

      </main>
    </section>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_LANDING_PAGE,
  });
  const fetchAbout = await client.query({
    query: GET_ABOUT_US,
  });
  return {
    props: {
      main: data?.landingPage,
      Products: data?.products,
      about: fetchAbout.data?.aboutUs
    },
    revalidate: 10
  };
}



// <m.section ref={ref} variants={boxVariants} animate={controls} initial='hidden' id="about"
// className="my-20 center w-full h-full">
// <About
//   title={about.title}
//   desc={about.about}
//   logo={about.logo.url}
// />
// </m.section>
// <m.section id='hot'
// variant={item}
// initial="hidden"
// animate="visible"
// className="w-full h-full center flex-col">
//   <h1 className="md:text-5xl text-3xl txt-main">Best Selling Products</h1>
// {Products.map((item) =>
//   <HotProductCard key={item.id} inStock={item.inStock}
//     slug={item.slug} newProd={item.new} hot={item.hot} imgUrl={item.heroImg.url}
//     slug={item.slug} title={item.title} desc={item.description} price={item.price} link={item.productLink} />
// )}
// </m.section>