'use client'
import React, { useState } from 'react'
import Navlist from './NavUtils/Navlist'
import Navlist2 from './NavUtils/Navlist2'

type Props = {
}

const SolutionNav = (props: Props) => {
    const [show,setShow] = useState(false)
    const handleOnclick = () => {
        if (window.innerWidth < 1024 ) {
                setShow(!show)
        }
    }

    const handleMouseEnter = () => {
        if(window.innerWidth > 1024){
            setShow(true)
        }
    }

    const handleMouseLeave = () => {
        if(window.innerWidth > 1024){
            setShow(false)
        }
    }
  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button onClick={handleOnclick}  type='button' className={`flex max-lg:font-semibold  items-center p-1 max-lg:justify-between max-lg:w-full ${show ? "lg:text-neutral-300": ""}`}>
            Solutions
            <svg opacity="0.5" aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={` ml-1 transition-all ease-in duration-200 max-lg:scale-x-125 ${show ? "lg:mt-2 opacity-40 max-lg:0": "mt-0 max-lg:-rotate-90"}`}>
                <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
            </svg>
        </button>
        <div className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[300px] transition ease-in duration-300 ${show ? "opacity-100 " : "opacity-0 hidden top-[2000px]"}`}>
            <div className='lg:border-b-[1px] mb-4 pb-4 pt-4 w-full'>
                <span className='text-neutral-800 font-semibold text-base'>For</span>
                <ul className='text-sm text-neutral-500 mt-1 w-full'>
                    <li >
                        <a href="" className='block py-2 hover:text-blue-600'>Enterprise</a>
                    </li>
                    <li>
                        <a href="" className='block py-2 hover:text-blue-600'>Teams</a>
                    </li>
                    <li >
                        <a href="" className='block py-2 hover:text-blue-600'>Startups</a>
                    </li>
                    <li className='py-2'>
                    <Navlist2 main='Education' path='M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z' />
                    </li>
                </ul>
            </div>
            <div className='lg:border-b-[1px] mb-4 pb-4 pt-2 w-full'>
                <span className='text-neutral-800 font-semibold text-base'>By Solution</span>
                <ul className='text-sm text-neutral-500 mt-1 w-full'>
                    <li >
                        <a href="" className='block py-2 hover:text-blue-600'>CI/CD & Automation</a>
                    </li>
                    <li className='py-2'>
                    <Navlist2 main='DevOps' path='M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z' />
                    </li>
                    <li className='py-2'>
                    <Navlist2 main='DevSecOps' path='M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z' />
                    </li>
                </ul>
            </div>
            <div className='mb-4 pb-0 pt-2 w-full'>
                <span className='text-neutral-800 font-semibold text-base'>Case Studies</span>
                <ul className='text-sm text-neutral-500 mt-1 w-full'>
                    <li >
                        <a href="" className='block py-2 hover:text-blue-600'>Customer stories</a>
                    </li>
                    <li className='py-2'>
                    <Navlist2 main='Resources' path='M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z' />
                    </li>
                </ul>
            </div>
        </div>
    </li>
  )
}

export default SolutionNav