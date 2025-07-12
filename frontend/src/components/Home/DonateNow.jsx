import React from 'react'
import { Button } from "@/components/ui/button";

const DonateNow = () => {
  return (
    <div>
        <div className="relative z-10 bg-deep-500
        rounded-lg mt-20 mb-20
        flex flex-row justify-around items-center px-[3rem] py-20
        max-md:flex-col
        max-md:px-2
        ">
            <div className="relative z-10 flex flex-col gap-y-2 justify-center items-center">
                <center>
                    <h1 className="text-4xl font-bold my-4 text-frost-500">
                     Support Human Rights. Empower Communities.
                    </h1>
                </center>
                
                <p className="text-1xl text-center text-frost-500 text-2xl max-w-4xl
                max-md:text-center mb-4">
                    Your donation helps us sustain workshops, cultural events, campaigns, and learning spaces. Every contribution fuels real impact.
                </p>

                <Button className="bg-yellow-500 text-white text-3xl font-bold px-12 py-8 transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-yellow-400 cursor-pointer">
                    DONATE
                </Button>


            </div>
        </div>
    </div>
  )
}

export default DonateNow