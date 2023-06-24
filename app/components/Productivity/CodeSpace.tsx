'use client'
import React, {useState} from 'react'
import {motion} from "framer-motion"

type Props = {}

const CodeSpace = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)

    const lineVariant = {
        hidden: {height: 0},
        show:{height:'100%'}
    }
  return (
    <div className='flex relative md:pl-10'>
    <img alt="" aria-hidden="true" width="2712" height="2712" className="absolute top-0 right-0 h-auto pointer-events-none" loading="lazy" decoding="async" src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp" />
    <div className='flex items-center flex-row relative'>
        <motion.div variants={lineVariant} initial='hidden' whileInView='show' viewport={{once:false}} transition={{duration:0.3}}  className='w-[3px] h-full increase origin-top'></motion.div>
        <img
            alt=""
            aria-hidden="true"
            width="81"
            height="485"
            style={{
                left: 'calc(50% - 2px)',
                height: 'auto',
                maxWidth: '9vw',
                transitionDelay: '100ms',
            }}
            className="hidden md:block absolute bottom-4 left-0"
            loading="lazy"
            decoding="async"
            src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-productivity.svg"
        />
    </div>
    <div className='lg:pl-24 md:pl-16 pl-6'>
        <div className='flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row'>
            <div className='py-4 mb-2 w-full'>
                <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{delay:0.2, type: "tween"}} className='md:pr-6'>
                    <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]"><span className='font-semibold text-white'>GitHub Codespaces</span> offers a complete dev environment in seconds, so you can code, build, test, and open pull requests from any repo anywhere.</h2> 
                    <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className='py-1 inline-block text-xl text-white font-semibold'>
                        Check out GitHub Codespaces 
                        <svg xmlns="http://www.w3.org/2000/svg" className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${hovered ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                        <div className={` ${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                    </a>
                    
                </motion.div>
            </div>
            <div className='py-4 px-6 w-full'>
                <div className='relative'>
                    <div className='flex flex-row relative'>
                        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type: "tween"}}  className='sm:absolute z-[1] top-[-200px] right-7 shadow-2xl'>
                            <img src="/pic.png" alt=""  loading="lazy" decoding="async" className=" w-[300px] h-auto rounded-md" />
                            <img
                                src="https://github.githubassets.com/images/modules/site/codespaces/illo-cursor.png"
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="absolute js-build-in-item build-in-slideX-left h-auto build-in-animate"
                                width="60"
                                height="96"
                                style={{
                                    right: '20%',
                                    bottom: '23%',
                                    width: '30px',
                                    transitionDelay: '200ms',
                                }}
                                />
                        </motion.div>  
                        <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type: "tween", delay:0.1}} className=" overflow-hidden max-w-[373px] bottom-0 rounded-md relative hidden sm:block build-in-animate" >
                            <img
                                src="https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png"
                                loading="lazy"
                                width="746"
                                height="368"
                                alt=""
                                decoding="async"
                                className="width-full d-block h-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type: "tween", delay:0.1}} className='mb-10 md:mb-32 pb-4 '>
            <div className='py-4 text-left'>
                <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#7ee787] relative font-medium bg-gradient-to-r from-[#7ee787] to-[#aff5b4] bg-clip-text text-transparent'>
                    <span className='font-semibold text-[12px]'>Did you know?</span>
                </div>
                <h3 className="text-[#7ee787] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">22% increase</h3>
                <p className="mb-3 md:text-xl text-base font-medium text-white">in developer productivity <br /> after three years with GitHub<sup>1</sup></p>
            </div>
        </motion.div>
    </div>
</div>
  )
}

export default CodeSpace