import React from 'react'

//components
import Who from "@/components/About/Who";
import MissionVision from '@/components/About/MissionVision';
import CoreValues from '@/components/About/CoreValues';


const About = () => {
  return (
    <>
    <div className="w-full relative max-w-5xl lg:px-0 center mx-auto">
        
        <section id="who">
            <Who />
        </section>

        <section id='missionvision'>
            <MissionVision />
        </section>

        <section id='programs'>

        </section>

        <section id="core">
            <CoreValues />
        </section>

        {/* <section id="*">
            *
        </section>

        <section id="*">
            *
        </section> */}
    </div>
    </>
  )
}

export default About