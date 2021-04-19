import Head from "next/head";
import { client } from "../lib/apollo";
import { GET_ABOUT_US, GET_LANDING_PAGE } from "../lib/queries";
import { useQuery } from "@apollo/client";
// import Background from "../components/common/Background";
import HotProductCard from "../components/common/HotProductCard";
import About from "../components/About";
import { m, useAnimation } from "framer-motion";
import { boxVariants, container, item, tagL } from "../animations";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// import Image from "next/image";
import LogoLoader from "../components/common/LogoLoader";
// import SlideShow from "../components/SllideShow";
import VideoPlayBack from "../components/VideoPlayBack";
import Gallery from "../components/Gallery";
import Button from "../components/common/Button"
import Link from "next/link";

export default function Home({ main, Products, about, video,gallery }) {

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
          <div className="flex flex-col justify-center items-start absolute z-10 px-14 py-10 w-full md:w-3/4 h-full">
            <h1 className="md:text-6xl text-4xl font-semibold txt-main my-5 cursor-pointer">
              {main.title}
            </h1>
            <m.h3 variants={tagL} initial="hidden" animate="visible" className="text-shd md:text-xl text-lg custom-montserrat txt-main font-semibold px-1 cursor-pointer pb-2">
              {main.tagline}
            </m.h3>

            <button className="  md:mr-3 mr-2 shadow-md md:m-0 my-2
        rounded-xl md:px-5 md:py-2 px-3 py-1 txt-main md:text-lg text-sm custom-montserrat
        border-yellow-600 border hover:bg-yellow-600 hover:text-gray-200
        transition-all  duration-500 ease-in-out">
              <Link href="/#hot" className="text-lg txt-main">Explore Us!</Link>
            </button>
          </div>
          <VideoPlayBack poster={video.thumbnail.url} src={video.video.url} />
        </section>
        <section className="min-h-screen  w-full center flex-col my-5">
          <Gallery
          srcOne={gallery.imageOne.url} txtOne={gallery.captionOne}
          srcTwo={gallery.imageTwo.url} txtTwo={gallery.captionTwo}
          />
        </section>
        <m.section ref={ref} variants={boxVariants} animate={controls} initial='hidden' id="about"
          className="my-20 center w-full h-full">
          <About title={about.title} desc={about.about} logo={about.logo.url}/>
        </m.section>
        <m.section id='hot' variant={item} initial="hidden" animate="visible" className="w-full h-full center flex-col">
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
      video: data?.playbackvideo,
      main: data?.landingPage,
      Products: data?.products,
      gallery: data?.gallery,
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