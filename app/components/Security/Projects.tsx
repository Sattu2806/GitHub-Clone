import React, {useState} from 'react'
import {motion} from "framer-motion"

type Props = {}

const Projects = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
  return (
    <div className='flex relative md:pl-10'>
    <img alt="" aria-hidden="true" width="2712" height="2712" className="absolute top-0 right-0 h-auto pointer-events-none" loading="lazy" decoding="async" src="https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp" />
    <div className='flex items-center flex-row relative'>
        <motion.div initial={{height:0}} whileInView={{height:'100%'}} className='w-[3px] h-full increase2'></motion.div>
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
            src="https://github.githubassets.com/images/modules/site/home-campaign/git-branch-security.svg"
        />
    </div>
    <div className='lg:pl-24 md:pl-16 pl-6'>
        <div className='flex max-md:flex-col-reverse my-8 items-center lg:gap-x-5 sm:my-12 md:my-16 pb-6 md:pb-20 md:flex-row'>
            <div className='py-4 mb-2 w-full'>
                <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='md:pr-6'>
                    <h2 className="mb-4 text-2xl max-lg:text-[20px] max-md:w-10/12 lg:w-full w-full text-[#7d8590]"><span className='font-semibold text-white'>GitHub Advanced Security</span>   lets you gain visibility into your security posture, respond to threats proactively, and ship secure applications quickly.</h2> 
                    <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className='py-1 inline-block text-xl text-white font-semibold'>
                        Get GitHub Advance Security
                        <svg xmlns="http://www.w3.org/2000/svg" className={` mb-[2px] text-white transition inline-block ml-3 ease-in duration-300  ${hovered ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                        <div className={` ${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                    </a>
                </motion.div>
            </div>
            <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3}} className='py-4 px-6 w-full'>
                <div className='relative'>
                    <div className='relative'>
                        <div className='md:absolute z-[1] top-[-100px] lg:top-[-200px] right-0 shadow-2xl'>
                        <img src="https://github.githubassets.com/images/modules/site/home-campaign/illu-ghas-list.png" alt="" loading="lazy" decoding="async" width="1190" height="1004" className="w-full h-auto d-block rounded-lg" />
                        </div>  
                    </div>
                </div>
            </motion.div>
        </div>
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{type:'tween', duration:0.3, delay:0.2}} className='mb-10 md:mb-32 pb-4 '>
            <div className='py-4 text-left'>
                <div className='z-[1] inline-block rounded-full px-2 border-2 border-[#abb4ff] relative font-medium bg-gradient-to-r from-[#939aff] to-[#abb4ff] bg-clip-text text-transparent'>
                    <span className='font-semibold text-[12px]'>Did you know?</span>
                </div>
                <h3 className="text-[#939aff] mb-2 mt-3 lg:text-6xl md:text-5xl text-3xl font-medium">56 million projects</h3>
                <p className="mb-3 md:text-xl text-base font-medium text-white">fixed vulnerabilities with GitHub<sup>2</sup></p>
            </div>
        </motion.div>
    </div>
  </div>
  )
}

export default Projects