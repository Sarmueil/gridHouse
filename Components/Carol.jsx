import React from 'react'
import heroStyles from '../styles/Hero.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

// const projectImg = [
//   {
//     image: '/images/snipe.png'
//   },
//   {
//     image:'/images/decamovies.png'
//   },
//   {
//     image:'/images/snipe.png'
//   },
//   {
//     image:'/images/decamovies.png'
//   },
//   {
//     image:'/images/snipe.png'
//   },
//   {
//     image:'/images/decamovies.png'
//   }
// ]

const Carol = ({ projectImg }) => {
    return (
        <div className={heroStyles.p}>
        <div className={heroStyles.pbrowser}>
        <a href='#' target="_blank" rel="noreferrer">
          <GitHubIcon style={{color:'black', fontSize:'1rem'}} className="cursor-pointer hover:scale-110" className={heroStyles.pcircle}/>
          </a>
          <a href='#' target="_blank" rel="noreferrer">
          <WebIcon style={{color:'black', fontSize:'1rem'}} className="cursor-pointer hover:scale-110" className={heroStyles.pcircle}/>
          </a>
        </div>   
            <a href='#' target="_blank" rel="noreferrer">
              <img src={projectImg.image} alt="" className={heroStyles.pimg} />
            </a>
      </div>
    )
}

export default Carol

// <div className='flex flex-col'>  
//            <div className='w-full bg-yellow-300 mt-0 mb-0 mr-8 ml-8 flex justify-center items-center' style={{height:'50vh'}}>
//             <img src="/images/demo.png" alt="icon" className='w-full h-full cursor-pointer object-cover' className={heroStyles.image}/>
//            </div>
//         </div>
        