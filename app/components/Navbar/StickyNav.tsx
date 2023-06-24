'use client'
import React, { useEffect, useState } from 'react';



const StickyNav = () => {  
  
  const [isSticky, setIsSticky] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [product,setproduct] = useState(false)
  const [collab,setcollab] = useState(false)
  const [security,setSecurity] = useState(false)
  const [product1,setproduct1] = useState(false)
  const [collab1,setcollab1] = useState(false)
  const [security1,setSecurity1] = useState(false)
  const [smallNav,setSmallNav] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [hovered1, setHovered1] = useState(false)

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // console.log('Hello World');
      }
      const element = document.getElementById('nav');
      const topCoordinate = element?.getBoundingClientRect().top;
      const Product = document.getElementById('productivity')
      const topProduct = Product?.getBoundingClientRect().top;
      const Collab = document.getElementById('collaboration')
      const topCollab = Collab?.getBoundingClientRect().top;
      const Security = document.getElementById('security')
      const topSecurity = Security?.getBoundingClientRect().top;
      if (topCoordinate && topCoordinate < 0) {
        setIsSticky(true);
      }
      if (topCoordinate && topCoordinate < -20) {
        setIsFixed(true);
      }
      if (topCoordinate && topCoordinate > -20) {
        setIsFixed(false);
      }
      if (topCoordinate && topCoordinate > 0) {
        setIsSticky(false);
      }
      if(topProduct && topProduct < 10){
        setproduct(true)
        setcollab(false)
        setSecurity(false)
      }
      if(topCollab && topCollab < 10){
        setproduct(false)
        setcollab(true)
        setSecurity(false)
      }
      if(topSecurity && topSecurity < 10){
        setproduct(false)
        setcollab(false)
        setSecurity(true)
      }
      // console.log(topCoordinate);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id='nav' className={`absolute h-[100px] z-[3] transition ease-in duration-150 ${isSticky ? "visible": "invisible"}`}>
        <div className=''></div>
        <div className={`w-screen ${isFixed ? "fixed": "sticky"}  py-2 bg-[#0d1117] shadow-slate-950 shadow-md top-0 `}>
            <div className='max-w-[1280px] mx-auto pb-2 lg:pb-3 pt-1 flex lg:px-3 px-12 items-center max-lg:flex-col relative'>
              <button onClick={() => setSmallNav(!smallNav)} className='lg:hidden absolute right-12 top-4'>
                  <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className={` text-white ${smallNav ? "hidden": ""}`}>
                      <path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path>
                  </svg>
                  <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className={` text-white ${smallNav ? "": "hidden"}`}>
                      <path d="M5.72 5.72a.75.75 0 0 1 1.06 0L12 10.94l5.22-5.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L13.06 12l5.22 5.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L12 13.06l-5.22 5.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L10.94 12 5.72 6.78a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
              </button>
              <div className='flex lg:flex-row flex-col text-[16px] justify-start max-lg:w-full flex-auto lg:space-x-4  text-white'>
                  <a href="#productivity" onClick={() => setSmallNav(false)} onMouseEnter={() => setproduct1(true)} onMouseLeave={() => setproduct1(false)} className={` max-lg:pt-2  ${product1 ? "lg:text-blue-500": ""}  ${product || smallNav ? "lg:text-blue-500 max-lg:pb-6": "max-lg:hidden"} `}>Productivity <div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-200 ${product1 ? "scale-100 bg-blue-500":""} ${product ? "scale-100 bg-blue-500":""}`}></div></a>
                  <a href="#collaboration" onClick={() => setSmallNav(false)} onMouseEnter={() => setcollab1(true)} onMouseLeave={() => setcollab1(false)} className={` max-lg:pt-2 ${collab1 ? "lg:text-blue-500": ""} ${collab || smallNav ? "lg:text-blue-500 max-lg:pb-6": "max-lg:hidden"} `}>Collaboration<div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 ${collab1 ? "scale-100 bg-blue-500":""} ${collab ? "scale-100 bg-blue-500":""}`}></div></a>
                  <a href="#security" onClick={() => setSmallNav(false)} onMouseEnter={() => setSecurity1(true)} onMouseLeave={() => setSecurity1(false)} className={` max-lg:pt-2 ${security1 ? "lg:text-blue-500": ""} ${security || smallNav ? "lg:text-blue-500 ": "max-lg:hidden"} `}>Security<div className={`w-10/12 max-lg:hidden mx-auto mt-1 h-[1px] bg-white scale-0 transition ease-in duration-100 ${security1 ? "scale-100 bg-blue-500":""} ${security ? "scale-100 bg-blue-500":""}`}></div></a>
              </div>
              <div className={`lg:ml-5 flex items-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5 ${smallNav ? "": "max-lg:hidden"}`}>
                  <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className='flex items-center max-lg:w-full text-white font-semibold justify-center space-x-2 text-base  border-[1px] border-neutral-500 px-3 py-3 rounded-md'>
                    Start a free enterprise trail
                      <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered ? "translate-x-0 ": "-translate-x-1"}`} width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                  </a>
                  <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="" className='flex items-center max-lg:w-full bg-white font-semibold px-3 py-3 justify-center rounded-md text-base'>
                    Sign up for GitHub
                      <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`} width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` transition ease-in duration-150 ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                  </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default StickyNav
