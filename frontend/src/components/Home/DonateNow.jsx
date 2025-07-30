import React from 'react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const DonateNow = () => {
  return (
    <div>
        <div className="relative z-10 bg-deep-500
        rounded-lg my-10
        flex flex-row justify-around items-center px-[3rem] py-5
        max-md:flex-col
        max-md:px-2
        ">
            <div className="relative z-10 flex flex-col gap-y-2 justify-center items-center">
                <center>
                    <h1 className="text-xl sm:text-3xl md:text-3xl max-w-2xl md:max-w-4xl font-bold sm:my-4 text-frost-500">
                     Support Human Rights. Empower Communities.
                    </h1>
                </center>
                
                <p className="text-center text-frost-500 text-sm sm:text-lg max-w-xl
                max-md:text-center mb-4">
                    Your donation helps us sustain workshops, cultural events, campaigns, and learning spaces. Every contribution fuels real impact.
                </p>

                <Link to="/donate">
                <Button className="bg-yellow-500 text-white text-3xl font-bold px-12 py-8 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-yellow-400 cursor-pointer">
                    DONATE
                </Button>
                </Link>


            </div>
        </div>
    </div>
  )
}

export default DonateNow