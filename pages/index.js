import Head from 'next/head';
import Hero from '../Components/Hero';
import GridLoader from "react-spinners/GridLoader";
import React, {useState, useEffect} from 'react'
import About from '../Components/About';
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
    <div className="bg-black flex justify-center items-center h-screen w-full text-center">
      <Head>
        <title>gridHOUSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <GridLoader color={'rgba(167, 243, 208)'} loading={loading} size={30}/> : <Hero /> }
    </div>
    <About />
    </>
  )
}
