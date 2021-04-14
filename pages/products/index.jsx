import { client } from "../../lib/apollo";
import { GET_ALL_PRODUCTS } from "../../lib/queries";
import Head from "next/head";
import DisplayProduct from "../../components/common/DisplayProduct";
import { m } from "framer-motion";
import { container, item } from "../../animations";
import { useQuery } from '@apollo/client'
import LogoLoader from "../../components/common/LogoLoader";

export default function allProducts({ products }) {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS)
  if (loading) return <LogoLoader />
  if (error || !data) return <>error occured</>
  return (
    <>
          <Head>
        <title>Products - Lucia Sophia</title>

        <meta property="og:title" content="Products by Lucia Sophia" key="ogtitle" />
+ 
        <meta property="og:site_name" content="Products by Lucia Sophia" key="ogsitename" />
       
 +  

      </Head>
    <main className="md:pt-14 pt-10 w-full min-h-screen center flex-wrap">
      <div className="md:m-5 m-2 flex w-full items-center justify-start">
        <h1 className="md:text-5xl underline text-2xl txt-main p-5 w-full custom-roboto ">Products</h1>
        
      </div>
      <m.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="min-h-screen w-full center flex-col "
      >
        <div className="flex flex-wrap items-start justify-between md:justify-start" variants={item}>
          {products.map(
            ({
              title,
              id,
              description,
              price,
              inStock,
              heroImg,
              slug,
              meta_description,
              new:isNew,
              productLink,
            }) => (
              < DisplayProduct
                key={id}
                path={heroImg.url}
                alt={meta_description}
                title={title}
                description={description}
                price={price.toFixed(2)}
                link={productLink}
                new={isNew}
                inStock={inStock}
                slug={slug}
              />
            )
          )}
        </div>
      </m.section>
    </main>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_PRODUCTS,
  });
  return {
    props: {
      products: data?.products,
    },
    revalidate:10
  };
}
