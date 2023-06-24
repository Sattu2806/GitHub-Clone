'use client'
import React, {useState} from 'react'
import Earth from './Earth1'
import Earth2 from './Earth2'

type Props = {}

const Globe = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    <div className='overflow-hidden relative'>
    <div className='max-w-[1280px] mx-auto relative z-[2]'>
      <div className='flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col'>
          <div className='py-3 mb-2 flex flex-col justify-center items-center'>
            <h2 className='px-4 mb-4 md:w-9/12 mx-auto lg:text-5xl md:text-4xl text-3xl font-bold text-white'>The place for anyone from anywhere to build anything</h2>
            <p className="mb-4 md:text-xl text-[16px] text-[#7d8590] px-4 mx-auto md:w-7/12">Whether you’re scaling your startup or just learning how to code, GitHub is your home. Join the world’s largest developer platform to build the innovations that empower humanity. Let’s&nbsp;build from&nbsp;here.</p>
            <div className='lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5'>
              <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className='flex items-center bg-white font-bold px-14 py-3 justify-center rounded-md text-[20px]'>
                Sign up for GitHub
                  <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered ? "translate-x-2 ": "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={`  transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
              </a>
              <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="" className='flex items-center text-white font-bold justify-center space-x-2 text-[20px]  border-[1px] border-neutral-500 px-4 py-3 rounded-md'>
                Start a free enterprise trail
                  <svg xmlns="http://www.w3.org/2000/svg" className={` ml-2 transition ease-in duration-150 ${hovered1 ? "translate-x-2 ": "-translate-x-0"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 origin-right ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
              </a>
            </div>
          </div>
      </div>
    </div>
    <div className={`relative z-[2] max-sm:hidden`}>
      <Earth/>
    </div>
    <div className={`relative z-[2] sm:hidden`}>
      <Earth2/>
    </div>
    <img className="absolute bottom-0 left-0 w-full h-full object-cover d-block pointer-events-none" width="801" height="807" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://github.githubassets.com/images/modules/site/home-campaign/footer-galaxy.jpg"></img>
    <div className='flex items-center justify-center relative z-[2] mt-[-200px]'>
      <img alt="Mona looking at the galaxy" width="801" height="807" className="pointer-events-none  w-[400px] object-cover h-[403px]" src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png" />
    </div>
  </div>
  )
}

export default Globe