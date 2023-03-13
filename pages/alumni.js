import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

//comment

export default function Contact() {
  return (
    <div className="bg-black  text-white">
      <NextSeo
        title="Contact: nine4"
        description="Contact Us!"
        canonical="https://nine4-1.vercel.app/contact"
        openGraph={{
          url: "https://nine4-1.vercel.app/contact",
        }}
      />

      
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-4 text-white">
              Det er ikke noe alumni i Gutta Consulting, gutta er for alltid
            </h1>
            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold">
              Contact us if you have any issues with the website or just want to
              ask a question!
            </p> */}
          </div>
          
        </div>
      </section>
      <br></br>
      <Footer />
    </div>
  );
}
