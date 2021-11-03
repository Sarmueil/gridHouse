import Head from 'next/head';
import GridLoader from "react-spinners/GridLoader";
import React, {useState, useEffect} from 'react'
import Homapage from '../Components/Homapage';

export default function Home() {
  const [loading, setLoading ] = useState(false)
  useEffect(()=>{
     setLoading(true)
     setTimeout(()=>{
       setLoading(false)
     }, 3000)
  },[])  
  return (
    <>
    <div>
      <Head>
        <title>gridHOUSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? 
      (
        <div className="bg-black flex justify-center items-center h-screen w-full text-center">
      <GridLoader color={'rgba(167, 243, 208)'}  loading={loading} size={30}/>
      </div>
      ) : 
       (
         <div >
       <Homapage />
       </div>
       )}
    </div>
    </>
  )
}
