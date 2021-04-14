import { ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout";
import { client } from "../lib/apollo";
import { AnimateSharedLayout } from "framer-motion";
import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/overlayEffect.css";
import "../styles/slider.css";
import "../styles/backgroundEffect.css"
// The handler to smoothly scroll the element into view
const handExitComplete = () => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url
    const hashId = window.location.hash;

    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);

      if (element) {
        // Smooth scroll to that elment
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }
};

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <section className="min-h-full min-w-full bg bg-fixed overflow-hidden">
        <AnimateSharedLayout exitBeforeEnter onExitComplete={handExitComplete}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimateSharedLayout>
      </section>
    </ApolloProvider>
  );
}

export default MyApp;
