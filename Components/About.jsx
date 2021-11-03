import React from 'react'

const About = () => {
    return (
        <div className="h-screen w-full bg-white">
            {/* about-header */}
            <div className="mt-10 ml-10 mb-10 border-b-2 border-green-300 w-20">
               <h2 className="text-black font-poppins text-4xl tracking-wide mr-6 cursor-pointer mb-1">About</h2> 
            </div>
            <div className="flex justify-center items-center w-full">
              {/* about_text */}
              <div className="flex-1 w-2/3 ml-8 bg-black p-16 self-start z-20">
                  <p className="text-white font-poppins text-2xl mb-5 tracking-wide">Hello. I'm Samuel Adedoyin Adebisi and I'm a multi-talented
                    human. Most of my time I design and build responsive, production-ready user interfaces and amazing websites.</p>
                   <p className="text-white font-roboto text-base tracking-wide">Since beginning my journey as a Web Developer, nearly 2 years ago, I've done remote work for companies, consulted for startups, 
                   and collaborated with talented people to create the best user experience for both business and consumer use. 
                   I'm quietly confident,naturally curious, and perpetually working on improving my skills one project at a time.</p>
                   <h3 className="text-black font-poppins text-base tracking-wide mr-5 p-2 bg-green-200 w-20 mt-7 cursor-pointer">Resume</h3>
              </div>
              {/*  */}
            {/* about_imgae */}
            <div className="flex-1 w-2/3 mr-8 p-2">
                <img src="/images/aboutB.png" alt="" className="-ml-20 mt-10"/>
                <img src="/images/aboutA.png" alt="" className="-ml-48 "/>
            </div> 
            </div>
        </div>
    )
}

export default About
