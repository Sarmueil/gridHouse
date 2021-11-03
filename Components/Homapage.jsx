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
