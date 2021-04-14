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

export default function Home({ main, Products, about }) {
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
  if (loading) return <div className="min-h-screen bg-gray-300 bg-opacity-25 absolute z-30"></div>
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

      <main className="min-h-full w-full ">
        <section className="h-full bg-fixed shadow-xl">
          <div className="relative top-0 left-0 z-0">
            <Background />

          </div>

          <div className="center w-full absolute flex-col top-0 left-0 z-10 min-h-full">
            <h1 className="md:text-8xl text-5xl font-semibold gradient-text my-5 cursor-pointer">
              {main.title}
            </h1>
            <m.h3 variants={tagL} initial="hidden"
              animate="visible" className="md:text-3xl text-2xl custom-montserrat txt-main font-semibold px-1 cursor-pointer">
              {main.tagline}
            </m.h3>
          </div>
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
