import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

// Her er gutta STOOORE vilkar
export default function Contact() {
  return (
    <div className="text-white bg-black">
      <NextSeo
        title="Vilkår for Gutta Consulting"
        description="404 Page for all our missing pages"
        canonical="https://nine4-1.vercel.app/404"
        openGraph={{
          url: "https://nine4-1.vercel.app/404",
        }}
      />
      <Head>
        <title>Gutta Consulting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="">
        <div className="flex flex-col justify-center mx-auto mt-8 mb-16 text-center xl:px-96 lg:px-52 md:px-32 px-12">
          <h1 className="text-4xl font-bold">
            Vilkår for bruk av Gutta Consulting
          </h1>
          <p className="mt-4 text-lg">
            Hei og velkommen til Gutta Consulting - hvor fester og
            forretningsideer går hånd i hånd!
            
            {/* <p className="mt-4 text-lg"></p> */}
            <p className="mt-4 text-lg">Her er vilkårene for bruk av vår
            fantastiske nettside: Ved å bli med i Gutta Consulting, aksepterer
            du at du er en av gutta, og du vil være en del av en klan som er
            dedikert til suksess, stil og støy. </p>
            Vår nettside er full av
            hemmeligheter og informasjon som du ikke kan dele med noen andre -
            med mindre de også er en del av gjengen. Hvis du deler våre
            hemmeligheter med noen andre, vil du bli uteksaminert fra klubben.
            Når du bruker vår nettside, er du ansvarlig for å ikke dele
            informasjon med rivaliserende klubber eller andre kjedelige
            mennesker som ikke passer inn i vår stilige livsstil. Vår nettside
            er full av bilder og videoer av våre fantastiske fester og
            hendelser. Ved å bruke vår nettside, gir du oss tillatelse til å
            bruke bilder av deg i våre markedsføringskampanjer og på våre
            sosiale medier-sider. Vi kan ikke garantere at alt innhold på vår
            nettside er 100% nøyaktig. Noen ganger blir vi litt for oppslukt i
            våre fester og kan glemme noen av de små detaljene. Ved å bruke vår
            nettside, godtar du at du vil delta i alle våre arrangementer og
            fester, og at du vil være kledd på en måte som viser vår stil og
            eleganse. Vi forbeholder oss retten til å endre disse vilkårene når
            som helst, avhengig av vår sinnstilstand og antall festdeltakere vi
            har. Hvis du bryter noen av disse vilkårene, vil du bli tvunget til
            å tilbringe en hel helg med å lese bøker om forretningspraksis og ta
            notater om hvordan du kan bli mer som oss. Takk for at du valgte
            Gutta Consulting, og vi ser frem til å feste og gjøre forretninger
            sammen med deg!
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
