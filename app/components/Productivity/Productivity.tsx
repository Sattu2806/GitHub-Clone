'use client'
import React, {useState} from 'react'
import CodeEditor from './CodeEditor'
import CodeSpace from './CodeSpace'
import HoverCard from './HoverCard'
import CopilotFeature from './CopilotFeature'
import {motion} from "framer-motion"

type Props = {}

const Productivity = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)


  return (
    <div className='max-w-[1280px] mx-auto'>
        <div className='flex md:pl-10 space-x-3 md:space-x-10'>
            <div className='flex flex-col items-center'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3}} viewport={{once:false}} className='relative'>
                    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" fill='currentColor' version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase text-white">
                        <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
                    </svg>
                    <span className="absolute left-0 top-0 h-full w-full home-campaign-glowing-icon-glow-1 z-3"></span>
                </motion.div>
                <motion.div initial={{height:0}} whileInView={{height: '100%' }} transition={{duration:0.4, delay:0.6}} className=" h-full w-[3px] mt-7 rounded-md bg-gradient-to-b from-[#7ee787]" ></motion.div>
            </div>
            <div className='md:w-10/12 mb-24'>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4, duration:0.3}} viewport={{once:false}} className="text-[20px] md:text-2xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '200ms'}}>Productivity</motion.div>  
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5,duration:0.3}} viewport={{once:false}} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                    <span className="text-[#7ee787]">Accelerate high-quality software development.</span>
                    Our AI-powered platform drives innovation with tools that boost developer velocity.
                </motion.h3>
            </div>
        </div>
        <CodeEditor/>
        <CodeSpace/>
        <div className='relative z-[1] '>
            <CopilotFeature/>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                <HoverCard backgroundColor='#7ee787' direction='flex-col' left='0'>
                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>GitHub Actions</span>  automates your build, test, and deployment workflow with simple and secure CI/CD.</p>
                        <div>
                            <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className=' md:text-xl text-white font-semibold inline-block'>
                                Discover GitHub Actions 
                                <svg xmlns="http://www.w3.org/2000/svg" className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hovered ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                <div className={` ${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                            </a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                        <img className="w-full h-auto js-build-in-item build-in-scale-fade build-in-animate" width="1209" height="890" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png" />
                    </div>
                </HoverCard>
                <HoverCard backgroundColor='#7ee787' direction='flex-col' left='-400px'>
                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>GitHub Mobile</span>   fits your projects in your pocket, so you never miss a beat while on the go.</p>
                        <div>
                            <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="" className=' md:text-xl text-white font-semibold inline-block'>
                                Get GitHub Mobile
                                <svg xmlns="http://www.w3.org/2000/svg" className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hovered1 ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered1 ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                                <div className={` ${hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                            </a>
                        </div>
                    </div>
                    <div className='overflow-hidden rounded-s-lg'>
                    <img className="w-full  h-auto" width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://github.githubassets.com/images/modules/site/home-campaign/illu-mobile.png" />
                    </div>
                </HoverCard>
            </div>
        </div>
        <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.3}} viewport={{once:false}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]" ></motion.div>
    </div>
  )
}

export default Productivity