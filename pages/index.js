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
    <div className="bg-black  h-screen w-full text-center">
      <Head>
        <title>gridHOUSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? <GridLoader color={'rgba(167, 243, 208)'} className="text-center" loading={loading} size={30}/> : <Homapage />}
    </div>
    </>
  )
}
