import React from "react";
// import Helmet from "react-helmet";
// import { useAuthContext } from "../hooks/useAuthContext";


//components
import Hero from "@/components/Home/Hero";
import Intro from "@/components/Home/Intro";
import DonateNow from "@/components/Home/DonateNow";
import Faq from "@/components/Home/Faq";
import MiyerkuletNow from "@/components/Home/MiyerkuletNow";
import PtjEducGate from "@/components/PtjEducGate";

function Home() {
  return (
    <>
    <div className="w-full relative max-w-5xl px-5 lg:px-0 center mx-auto pt-[7rem] ">
        <section id="home">
            <Hero />
        </section>

        <section>
            <Intro />
        </section>

        <section id="miyerkulet">
            <MiyerkuletNow />
        </section>

        <section id="ptj-gate">
            <PtjEducGate />
        </section>

        <section id="faqs">
            <Faq />
        </section>

        <section id="donate">
            <DonateNow/>
        </section>

    </div>    
    </>
  );
}

export default Home;