'use client'
import React, { useState, useEffect } from 'react'
import Navlist from './NavUtils/Navlist'
import Navlist2 from './NavUtils/Navlist2'

type Props = {
}

const OpenSourceNav = (props: Props) => {
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
        <li id='myLi'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <button onClick={handleOnclick} type='button' className={`flex items-center p-1 transition ease-in duration-150 max-lg:justify-between max-lg:font-semibold max-lg:w-full ${show ? "lg:text-neutral-300": ""}`}>
                Open Source
                <svg opacity="0.5" aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className={`octicon octicon-chevron-down HeaderMenu-icon ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${show ? "lg:mt-2 opacity-40 max-lg:rotate-0": "mt-0 max-lg:-rotate-90"}`}>
                    <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                </svg>
            </button>
            <div className={`relative lg:absolute -ml-5 bg-white rounded-md lg:py-4 p-6 w-[320px] transition ease-in duration-150 ${show ? "opacity-100 visible" : "opacity-0 hidden"}`}>
                <div className='lg:border-b-[1px] mb-4 pb-6 pt-4 w-full'>
                    <span className='text-neutral-800 font-semibold text-base hover:text-blue-600'> GitHub Sponsers <p className='text-sm font-normal text-neutral-500'>Fund open source developers</p></span>
                </div>
                <div className='lg:border-b-[1px] mb-4 pb-6 pt-0 w-full'>
                    <span className='text-neutral-800 font-semibold text-base hover:text-blue-600'>The ReadMe Projects <p className='text-sm font-normal text-neutral-500'>GitHub community articles</p></span>
                </div>
                <div className='mb-4 pb-0 pt-2 w-full'>
                    <span className='text-neutral-800 font-semibold text-base'>Repositories</span>
                    <ul className='text-sm text-neutral-500 mt-1 w-full'>
                        <li >
                            <a href="" className='block py-2 hover:text-blue-600'>Topics</a>
                        </li>
                        <li >
                            <a href="" className='block py-2 hover:text-blue-600'>Trendings</a>
                        </li>
                        <li >
                            <a href="" className='block py-2 hover:text-blue-600'>Collections</a>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
  )
}

export default OpenSourceNav