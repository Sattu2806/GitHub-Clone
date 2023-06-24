'use client'
import React, {useState} from 'react'

type Props = {
    main: string
    path: string
}

const Navlist2 = ({main , path}: Props) => {
    const [focus, setFocus] = useState<boolean>(false)
  return (
    <a onMouseEnter={() => setFocus(true)} onMouseLeave={() => setFocus(false)} href="#" className={`flex  items-center ${focus ? "text-blue-600":"text-neutral-500"}`}>
        {main}
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" fill='currentColor' version="1.1" width="16" data-view-component="true" className={`octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle ml-2 transition ease-in duration-150 ${focus ? " translate-x-0 text-blue-500 opacity-100": " -translate-x-3 opacity-0"}`}>
            <path d={path}></path>
        </svg>
    </a>
  )
}

export default Navlist2