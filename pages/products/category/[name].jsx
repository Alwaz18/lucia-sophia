import { client } from "../../../lib/apollo";
import { GET_CATEGORY, GET_ONE_CATEGORY } from "../../../lib/queries";
import Head from "next/head";
import DisplayProduct from "../../../components/common/DisplayProduct";
import { m } from "framer-motion";
import { container, item } from "../../../animations";
import { useQuery } from '@apollo/client'
import LogoLoader from "../../../components/common/LogoLoader";
import DropDown from "../../../components/common/Dropdown";

export default function allProducts({ filteredProducts }) {
  const { products } = filteredProducts
  const { data, loading, error } = useQuery(GET_CATEGORY)
  if (loading) return <LogoLoader />
  // if (error || !data) return <>error occured</>
  return (
    <>
      <Head>
        <title>{filteredProducts.name} - Lucia Sophia</title>

        <meta property="og:title" content="Products by Lucia Sophia" key="ogtitle" />
+
        <meta property="og:site_name" content="Products by Lucia Sophia" key="ogsitename" />

 +

      </Head>
      <main className="md:pt-14 pt-10 w-full min-h-screen center flex-wrap">

      <div className="md:m-5 m-2 flex w-full items-center justify-between ">
          <h1 className="md:text-5xl font-medium underline text-2xl p-5 w-full custom-montserrat txt-main">Category: {filteredProducts.name}</h1>

        </div>
        <m.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="min-h-screen min-w-full center flex-col py-10"
        >
          <div className="flex flex-wrap h-full w-full items-start my-20 justify-between md:justify-start" variants={item}>
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
                new: isNew,
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


export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ONE_CATEGORY,

  });
 
  const paths = data?.categories.map(({ name }) => `/products/category/${name}`)
  return {
    paths,
    fallback: false
  }

}

export async function getStaticProps({ params }) {
  const { name } = params

  const { data } = await client.query({
    query: GET_CATEGORY,
    variables: { name },
  });

  return {
    props: {
      filteredProducts: data.categories[0],
     

    },
    revalidate: 10
  };
}


