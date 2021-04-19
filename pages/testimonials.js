import Head from "next/head";
import { client } from "../lib/apollo";
import { GET_ALL_REVIEWS } from "../lib/queries";
import { useQuery } from "@apollo/client";
import LogoLoader from "../components/common/LogoLoader";

import Testomonial from "../components/common/Testomonial";
function testimonial({reviews}) {

    const { data, loading, error } = useQuery(GET_ALL_REVIEWS);
    if (loading) return <LogoLoader />
    if (error) return <h1>Error Occured</h1>
    return (
        <section
            className="min-h-screen center flex-col pt-20">
            <h1 className="custom-montserrat w-full text-center font-semibold underline txt-main text-2xl md:text-4xl py-10">Here's what they say</h1>
            <div className="w-full h-full flex flex-wrap items-center justify-around">
                {reviews.map(({ name, date, feature, testimonial, id }) =>
                    <Testomonial key={id} name={name}
                        date={date} feature={feature}
                        review={testimonial}
                    />
                )}
            </div>
        </section>
    )
}

export default testimonial


export async function getStaticProps() {
    const { data } = await client.query({
        query: GET_ALL_REVIEWS
    });

    return {
        props: {
            reviews: data.reviews
        },
        revalidate: 10
    };
}
