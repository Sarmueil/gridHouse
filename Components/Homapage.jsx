import React, {useState, useEffect} from 'react'
import Hero from './Hero'
import About from './About'
import Carousel from 'react-elastic-carousel'
import Carol from './Carol'

const breakPoints = [
    {width:1, itemsToShow: 1},
    {width:550, itemsToShow: 2},
    {width:768, itemsToShow: 3},
    {width:1200, itemsToShow: 3} 
]


const Homapage = () => {
    return (
        <div>
            <Hero />
            <About />
            {/* border-b-2 border-green-300 */}
            <div className="mt-10 mb-5 w-full flex justify-between items-center">
               <h2 className="text-black font-poppins text-4xl ml-10 tracking-wide cursor-pointer pb-2 w-20 border-b-4 border-green-300">Projects</h2>
               <h3 className="text-black font-poppins text-base mr-10 tracking-wide p-2 bg-green-200  cursor-pointer">Explore</h3> 
            </div>
            <Carousel  breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={4000}>
               <Carol />
               <Carol />
               <Carol />
               <Carol />
               <Carol />
               <Carol />
               <Carol />
             </Carousel>   
        </div>
    )
}

export default Homapage
