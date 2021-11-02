import React from 'react'
import heroStyles from '../styles/Hero.module.css'
import { MenuIcon } from '@heroicons/react/solid'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const Hero = () => {
    return (
        <header className="p-0 m-0 bg-transparent relative w-full">
           <div className={heroStyles.brand_bg}>
                 <div className="flex justify-between items-center fixed top-0 w-full z-20" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                    <div className="flex items-center w-1/2">
                       <img src='/images/logoD.png' alt="gridhouse-logo" className="ml-4 mt-9 mb-7 cursor-pointer"/>
                       <div className="items-center mt-9 ml-16 mb-7 hidden md:flex">
                            <h3 className="text-white font-poppins text-base tracking-wide mr-6 cursor-pointer transition-all duration-500 hover:text-green-200">About</h3>
                            <h3 className="text-white font-poppins text-base tracking-wide mr-6 cursor-pointer transition-all duration-500 hover:text-green-200">Projects</h3>
                            <h3 className="text-white font-poppins text-base tracking-wide mr-6 cursor-pointer transition-all duration-500 hover:text-green-200">Experience</h3>
                            <h3 className="text-white font-poppins text-base tracking-wide mr-6 cursor-pointer transition-all duration-500 hover:text-green-200">Blog</h3>
                       </div>
                    </div>
                    <div>
                        <MenuIcon className="h-8 text-white mr-2 mt-2 md:hidden"/>
                    </div>
                    <div className="items-center cursor-pointer mr-8 hidden md:flex">
                        <h3 className="text-white font-poppins text-base tracking-wide mr-5 p-2 border-2 border-gray-200 ">Resume</h3>
                        <h3 className="text-black font-poppins text-base tracking-wide bg-green-200 p-2 transition-all duration-500 hover:bg-transparent hover:border-gray-200 hover:hover:text-white ">Hire Me</h3>
                    </div>
                 </div>
                 
                 {/* hero */}
                 {/* ml-28 mt-36 */}
                 <div className="hidden md:block w-1/2 absolute top-56 left-60">
                     <h1 className="text-white font-poppins text-xl tracking-wider mb-6 md:text-7xl w-full">I'm <span className="text-green-200 border-2 border-gray-200 p-2">SAMUEL</span></h1>
                     <p className="text-white font-poppins tracking-wider" className={heroStyles.hero_info}>Front End Web Developer and UI/UX designer.</p>
                 </div>
                 {/* mobile */}
                 {/* mt-32 */}
                 <div className=" absolute top-64 left-20 md:hidden">
                     <h1 className="text-white font-poppins text-3xl tracking-wider mb-6">I'm <span className="text-green-200 border-2 border-gray-200 p-2">SAMUEL</span></h1>
                     <p className="text-white font-poppins tracking-wider text-base w-9/12 m-auto">Front End Web Developer and UI/UX designer.</p>
                 </div>
                 {/* hero icons */}
                 {/* ml-64 mt-2 */}
                 <div className="hidden md:flex items-center absolute top-96 left-96">
                   <GitHubIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                   <LinkedInIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                   <InstagramIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                   <EmailIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                   <TwitterIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                 </div>
                 {/* mobile */}
                 <div className="flex items-center ml-28 absolute top-96 md:hidden">
                   <GitHubIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                   <LinkedInIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                   <InstagramIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                   <EmailIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                   <TwitterIcon style={{color:'white', fontSize:'1.7rem'}} className="cursor-pointer mr-2 hover:scale-110"/>
                 </div>
                 {/* hero select for mobile */}
                 <div className="items-center justify-center flex absolute top-2/3 left-24 md:hidden">
                        <h3 className="text-white font-poppins text-base tracking-wide mr-5 p-2 border-2 border-gray-200 ">Resume</h3>
                        <h3 className="text-black font-poppins text-base tracking-wide bg-green-200 p-2 ">Hire Me</h3>
                </div>
           </div>
        </header>
    )
}

export default Hero
