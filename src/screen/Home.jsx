import React, { useEffect } from 'react'
import { Header } from '../router';
import { Hero } from '../components/hero/Hero';
// import { Hero } from '../router'

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
},[]);
  return (
    <div className='text-blue-400 flex justify-center items-center h-[100vh]'>
      <Header/>
      <Hero/>
    </div>
  )
}

