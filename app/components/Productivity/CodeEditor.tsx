import React from 'react'
import CodeBlock from './CodeBlock'
import {motion} from "framer-motion"

type Props = {}

const CodeEditor = (props: Props) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren:.1,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, y:3 },
        show: { opacity: 1, y:0, transition: {type:'keyframe'}},
    };
  return (
    <div className='tab rounded-xl border-[0.5px] border-[#30363d] overflow-hidden relative shadow-2xl bg-[#161b22]'>
    <div className='flex items-center justify-between border-b-[0.5px] border-[#30363d] p-4'>
        <div className='pre-next max-md:hidden flex text-[#7d8590] font-medium'>
            <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-chevron-left color-fg-muted">
                <path d="M15.28 5.22a.75.75 0 0 1 0 1.06L9.56 12l5.72 5.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
            <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-chevron-right color-fg-muted">
                <path d="M8.72 18.78a.75.75 0 0 1 0-1.06L14.44 12 8.72 6.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path>
            </svg>
        </div>
        <div className='flex items-center justify-between px-2 py-1 rounded-md bg-[#0d1117] border-[0.5px] border-[#30363d] w-full md:w-auto'>
            <svg aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-lock color-fg-subtle flex-shrink-0 text-[#7d8590]">
                <path d="M4 4a4 4 0 0 1 8 0v2h.25c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-5.5C2 6.784 2.784 6 3.75 6H4Zm8.25 3.5h-8.5a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25ZM10.5 6V4a2.5 2.5 0 1 0-5 0v2Z"></path>
            </svg>
            <div className='md:px-8 px-2 text-white whitespace-nowrap overflow-hidden text-[14px] text-ellipsis'>mona-github-github-g59jpq2w5w7.github.dev</div>
            <svg aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-sync color-fg-subtle flex-shrink-0 text-[#7d8590]">
                <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
            </svg>
        </div>
        <div className='pre-next max-md:hidden flex text-[#7d8590] font-medium'>
            <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-plus color-fg-muted">
                <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
            </svg>
        </div>
    </div>
    <div className='flex items-stretch'>
        <div className='hidden md:block p-6 border-r-[0.5px] border-[#30363d] '>
            <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-three-bars color-fg-muted text-[#7d8590]">
                <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
            </svg>
        </div>
        <div className='min-w-0 w-full'>
            <div className='border-b-[0.5px] border-[#30363d] text-[#7d8590]'>
                <ul className='flex px-3 pt-4'>
                    <li className='px-3 py-2 rounded-t-md bg-[#0d1117] text-gray-300'>index.html</li>
                    <li className='px-3 py-2'>script.js</li>
                    <li className='px-3 py-2 '>package.json</li>
                </ul>
                <div className='bg-[#0d1117] p-4 '>
                    <div className='flex'>
                        <div className="">
                            {Array.from({ length: 12 }, (_, index) => (
                                <div className="pr-2" key={index + 1}>{index + 1}</div>
                            ))}
                        </div>
                        <CodeBlock/>
                    </div>
                </div>
            </div>
            <div className='p-4 text-[#7d8590]'>
                <ul className='flex mb-3'>
                    <li className='pr-3 text-gray-200'>Terminal</li>
                    <li className='pr-3'>Output</li>
                    <li className='pr-3'>Problems</li>
                    <li className='pr-3'>Debug Console</li>
                </ul>
                <motion.div variants={container} initial='hidden' whileInView='show' viewport={{once:false, amount:0.5}} className="overflow-hidden whitespace-nowrap font-mono text-[14px] text-[#7d8590]" data-type-row-delay="50">
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible" >
                        [
                            <span className="color-fg-subtle">09:43:36</span>
                        ]
                        <span> Starting </span>
                        &apos;<span className="color-fg-accent">watch-extension:vscode-api-tests</span>&apos;
                        ...
                    </motion.div>
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
                        [<span className="color-fg-subtle">09:43:36</span>]
                        <span> Finished </span>
                        &apos;<span className="color-fg-accent">clean-extension:typescript-language-features</span>&apos;
                        after
                        <span className="color-fg-done">248 ms</span>
                    </motion.div>
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
                        [<span className="color-fg-subtle">09:43:36</span>]
                        <span> Starting </span>
                        &apos;<span className="color-fg-accent">watch-extension:typescript-language-features</span>&apos;
                        ...
                    </motion.div>
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible" >
                        [<span className="color-fg-subtle">09:43:36</span>]
                        <span> Finished </span>
                        &apos;<span className="color-fg-accent">clean-extension:php-language-features</span>&apos;
                        after
                        <span className="color-fg-done">384 ms</span>
                    </motion.div>
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
                        [<span className="color-fg-subtle">09:43:36</span>]
                        <span> Starting </span>
                        &apos;<span className="color-fg-accent">watch-extension:php-language-features</span>&apos;
                        ...
                    </motion.div>
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
                        [<span className="color-fg-subtle">09:43:40</span>]
                        <span> Finished </span>
                        &apos;<span className="color-fg-accent">clean-extension:html-language-features-server</span>&apos;
                        after
                        <span className="color-fg-done">4.66 s</span>
                    </motion.div>
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible" >
                        [<span className="color-fg-subtle">09:43:40</span>]
                        <span> Starting </span>
                        &apos;<span className="color-fg-accent">watch-extension:html-language-features-server</span>&apos;
                        ...
                    </motion.div>
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible" >
                        [<span className="color-fg-subtle">09:43:43</span>]
                        <span> Finished </span>
                        &apos;<span className="color-fg-accent">clean-client</span>&apos;
                        after
                        <span className="color-fg-done">7.33 s</span>
                    </motion.div>
                    <motion.div variants={item} className="no-wrap js-type-row row-is-visible">
                        [<span className="color-fg-subtle">09:43:43</span>]
                        <span> Starting </span>
                        &apos;<span className="color-fg-accent">watch-client</span>&apos;
                        ...
                    </motion.div>
                </motion.div>
            </div>
        </div>
        <div className='md:block hidden border-l-[0.5px] border-[#30363d] w-full'>
            <div className='flex items-center justify-between px-[16px] pt-[22px] pb-2 text-gray-100'>
                <div>
                    <svg aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="">
                        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                    </svg>
                </div>
                <div>
                    <svg aria-hidden="true" height="24" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                </div>
                <div>
                    <svg aria-hidden="true" height="16" fill='currentColor' viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="">
                        <path d="M8 16a2 2 0 0 0 1.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 0 0 8 16ZM3 5a5 5 0 0 1 10 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.519 1.519 0 0 1 13.482 13H2.518a1.516 1.516 0 0 1-1.263-2.36l1.703-2.554A.255.255 0 0 0 3 7.947Zm5-3.5A3.5 3.5 0 0 0 4.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.017.017 0 0 0-.003.01l.001.006c0 .002.002.004.004.006l.006.004.007.001h10.964l.007-.001.006-.004.004-.006.001-.007a.017.017 0 0 0-.003-.01l-1.703-2.554a1.745 1.745 0 0 1-.294-.97V5A3.5 3.5 0 0 0 8 1.5Z"></path>
                    </svg>
                </div>
            </div>
            <div className='px-6 flex items-center justify-between h-full bg-[#040d21]'>
                <img className="w-full h-auto md:block" width="1238" height="1404" loading="lazy" decoding="async" alt="Planet earth with visualization of GitHub activity crossing the globe" src="https://github.githubassets.com/images/modules/site/home/globe.jpg"/>
            </div>
        </div>
    </div>
</div>
  )
}

export default CodeEditor