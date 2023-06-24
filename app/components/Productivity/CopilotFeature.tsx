'use client'
import React, {useState} from 'react'
import HoverCard from './HoverCard'
import {motion} from "framer-motion"

type Props = {}

const CopilotFeature = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [showPy, setShowPy] = useState<boolean>(true)
    const [showJs, setShowJs] = useState<boolean>(false)
    const [showGo, setShowGo] = useState<boolean>(false)
    const [count, setCount] = useState(0);

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren:.1,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { type: 'tween' } },
    };

      
  return (
    <HoverCard backgroundColor = '#7ee787' direction='' left='0'>
    <div className='md:flex flex-col md:space-y-20 flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 justify-between '>
        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-medium'>GitHub Copilot</span> is your AI pair programmer that empowers you to complete tasks 55% faster by turning natural language prompts into coding suggestions.</p>
        <div>
            <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className=' md:text-xl text-white font-semibold inline-block'>
                Meet GitHub Copilot 
                <svg xmlns="http://www.w3.org/2000/svg" className={` text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hovered ? "translate-x-0 ": "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-white transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                <div className={` ${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left  transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
            </a>
        </div>
    </div>
    <div className='overflow-hidden rounded-s-lg z-[1] flex-1 shadow-3xl'>
        <div className='text-left border-[0.5px] bg-[#161b22] border-[#30363d] rounded-lg text-[#161b22] box-shadow-card-mktg md:mt-10 md:ml-0 sm:ml-10 sm:mr-10 mb-16 ml-3 mr-3 '>
            <div className=''>
                <div className='overflow-x-auto pt-2 px-2 mb-0 border-b-[0.5px] border-[#30363d] '>
                    <div className='flex items-center bg-[#161b22] text-[#7d8590] tab-nav'>
                        <button onClick={() => {setShowPy(true); setShowGo(false); setShowJs(false)}} type='button' className={`flex items-center  py-2 px-4 ${showPy ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]" : ""}  `}>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" fill='currentColor' viewBox="0 0 24 24" aria-hidden="true" className="octicon mr-2" height="16" width="16"><title>Python</title><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"></path></svg>
                            <span>draw_scatterplot.py</span>
                        </button>
                        <button onClick={() => {setShowPy(false); setShowGo(false); setShowJs(true)}} type="button" className={`flex items-center py-2 px-4 ${showJs ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]": ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" fill='currentColor' viewBox="0 0 24 24" aria-hidden="true" className="octicon mr-2" height="16" width="16"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>
                            <span>time.js</span>
                        </button>
                        <button onClick={() => {setShowPy(false); setShowGo(true); setShowJs(false)}} type="button" className={`flex items-center py-2 px-4 ${showGo ? "border-[0.5px] rounded-t-md border-b-[0] text-white border-[#30363d] bg-[#0d1117]": ""} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" role="img" fill='currentColor' viewBox="0 0 24 24" aria-hidden="true" className="octicon mr-2" height="16" width="16"><title>Go</title><path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"></path></svg>
                            <span>memoize.go</span>
                        </button>
                        <button></button>
                    </div>
                </div>
                <div className={`p-4 relative bg-[#0d1117] ${showPy ? "" : "hidden"}`}>
                    <div className='flex'>
                        <div className='text-[#6e7681] text-right'>
                            {Array.from({ length: 8 }, (_, index) => (
                            <div className="pr-2" key={index + 1}>{index + 1}</div>
                            ))}
                        </div>
                        <div key={count} className='flex-1 overflow-x-auto text-white rounded-b-md '>
                            <pre className=""><span className="code-editor-line-mktg"><span className="pl-k">import</span> <span className="pl-s1">matplotlib</span>.<span className="pl-s1">pyplot</span> <span className="pl-k">as</span> <span className="pl-s1">plt</span></span></pre>
                            <pre className=""><span className="code-editor-line-mktg"></span></pre>
                            <pre className=""><motion.span variants={container} initial='hidden' whileInView='show' className="code-editor-line-mktg"><motion.span variants={item} className="pl-k js-type-letters">def</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-en js-type-letters">draw_scatterplot</motion.span><motion.span variants={item} className="js-type-letters">(</motion.span><motion.span variants={item} className="pl-s1 js-type-letters">x_values</motion.span><motion.span variants={item} className="js-type-letters">, </motion.span><motion.span variants={item} className="pl-s1 js-type-letters">y_values</motion.span><motion.span variants={item} className="js-type-letters">):</motion.span></motion.span></pre>
                            <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{delay:1, type:'just'}}>
                            <pre className=" bg-[#388bfd1a]"><span>    <span className="pl-s1">plt</span>.<span className="pl-en">scatter</span>(<span className="pl-s1">x_values</span>, <span className="pl-s1">y_values</span>, <span className="pl-s1">s</span><span className="pl-c1">=</span><span className="pl-c1">20</span>)</span></pre>
                            <pre className=" bg-[#388bfd1a]"><span>    <span className="pl-s1">plt</span>.<span className="pl-en">title</span>(<span className="pl-s">&ldquo;Scatter Plot&ldquo;</span>)</span></pre>
                            <pre className=" bg-[#388bfd1a]"><span>    <span className="pl-s1">plt</span>.<span className="pl-en">xlabel</span>(<span className="pl-s">&ldquo;x values&ldquo;</span>)</span></pre>
                            <pre className=" bg-[#388bfd1a]"><span>    <span className="pl-s1">plt</span>.<span className="pl-en">ylabel</span>(<span className="pl-s">&ldquo;y values&ldquo;</span>)</span></pre>
                            <pre className=" bg-[#388bfd1a]"><span>    <span className="pl-s1">plt</span>.<span className="pl-en">show</span>()</span></pre>
                            <div className="rounded-tl-none  bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
                                <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" aria-hidden="true" className="mr-1"><path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path><path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"></path></svg>
                                Copilot
                            </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'>
                        <button onClick={() => setCount(count + 1)}  type="button" className='flex items-center text-white justify-between'>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" fill='currentColor' width="16" data-view-component="true" className="octicon octicon-sync mr-2">
                                <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                            </svg>
                            Replay
                        </button>
                    </div>
                </div>
                <div className={`p-4 relative bg-[#0d1117] ${showJs ? "": "hidden"}`}>
                    <div className='flex'>
                        <div className='text-[#6e7681] text-right'>
                            {Array.from({ length: 7 }, (_, index) => (
                            <div className="pr-2" key={index + 1}>{index + 1}</div>
                            ))}
                        </div>
                        <div key={count} className='flex-1 overflow-x-auto text-white rounded-b-md'>
                        <pre className=""><span className="code-editor-line-mktg d-inline-block"><span className="pl-k">const</span> <span className="pl-s1">seconds</span> <span className="pl-c1">=</span> <span className="pl-c1">3600</span></span></pre>
                        <pre className=""><motion.span variants={container} initial='hidden' whileInView='show' className="code-editor-line-mktg d-inline-block"><motion.span variants={item} className="pl-k js-type-letters">const</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-s1 js-type-letters">minutes</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-c1 js-type-letters">=</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-s1 js-type-letters">seconds</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-c1 js-type-letters">/</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-c1 js-type-letters">60</motion.span></motion.span></pre>
                        <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{delay:1, type:'just'}}>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">hours</span> <span className="pl-c1">=</span> <span className="pl-s1">minutes</span> <span className="pl-c1">/</span> <span className="pl-c1">60</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">days</span> <span className="pl-c1">=</span> <span className="pl-s1">hours</span> <span className="pl-c1">/</span> <span className="pl-c1">24</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">weeks</span> <span className="pl-c1">=</span> <span className="pl-s1">days</span> <span className="pl-c1">/</span> <span className="pl-c1">7</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">months</span> <span className="pl-c1">=</span> <span className="pl-s1">days</span> <span className="pl-c1">/</span> <span className="pl-c1">30</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span><span className="pl-k">const</span> <span className="pl-s1">years</span> <span className="pl-c1">=</span> <span className="pl-s1">months</span> <span className="pl-c1">/</span> <span className="pl-c1">12</span></span></pre>
                        <div className="rounded-tl-none shadow-xl bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" aria-hidden="true" className="mr-1"><path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path><path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"></path></svg>
                            Copilot
                        </div>
                        </motion.div>
                        </div>
                    </div>
                    <div className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'>
                        <button onClick={() => setCount(count + 1)}  type="button" className='flex items-center text-white justify-between'>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" fill='currentColor' width="16" data-view-component="true" className="octicon octicon-sync mr-2">
                                <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                            </svg>
                            Replay
                        </button>
                    </div>
                </div>
                <div className={`p-4 relative bg-[#0d1117] ${showGo ? "" : "hidden"}`}>
                    <div className='flex'>
                        <div className='text-[#6e7681] text-right'>
                            {Array.from({ length: 11 }, (_, index) => (
                            <div className="pr-2" key={index + 1}>{index + 1}</div>
                            ))}
                        </div>
                        <div key={count} className='flex-1 overflow-x-auto text-white rounded-b-md'>
                        <pre className=""><span className="code-editor-line-mktg d-inline-block"><span className="pl-k">package</span> main</span></pre>
                        <pre className=""><motion.span variants={container} initial='hidden' whileInView='show' className="code-editor-line-mktg d-inline-block"><motion.span variants={item} className="js-type-letters">  </motion.span><motion.span variants={item} className="pl-k js-type-letters">func</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-en js-type-letters">Memoize</motion.span><motion.span variants={item} className="js-type-letters">(</motion.span><motion.span variants={item} className="pl-s1 js-type-letters">fn</motion.span><motion.span variants={item} className="js-type-letters"> </motion.span><motion.span variants={item} className="pl-k js-type-letters">func</motion.span><motion.span variants={item} className="js-type-letters">{'('}</motion.span><motion.span variants={item} className="pl-smi js-type-letters">int</motion.span><motion.span variants={item} className="js-type-letters">) </motion.span><motion.span variants={item} className="pl-smi js-type-letters">int</motion.span><motion.span variants={item} className="js-type-letters">) </motion.span><motion.span variants={item} className="pl-k js-type-letters">func</motion.span><motion.span variants={item} className="js-type-letters">{'('}</motion.span><motion.span variants={item} className="pl-smi js-type-letters">int</motion.span><motion.span variants={item} className="js-type-letters">{')'} </motion.span><motion.span variants={item} className="pl-smi js-type-letters">int</motion.span><motion.span variants={item} className="js-type-letters"> {'{'} </motion.span></motion.span></pre>
                        <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}} transition={{delay:1.5, type:'just'}}>
                        <pre className=" bg-[#388bfd1a]"><span>      <span className="pl-s1">cache</span> <span className="pl-c1">:=</span> <span className="pl-en">make</span>(<span className="pl-k">map</span>[<span className="pl-smi">int</span>]<span className="pl-smi">int</span>)</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>      <span className="pl-k">return</span> <span className="pl-k">func</span>(<span className="pl-s1">n</span> <span className="pl-smi">int</span>) <span className="pl-smi">int</span> {'{'}</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>          <span className="pl-k">if</span> <span className="pl-s1">v</span>, <span className="pl-s1">ok</span> <span className="pl-c1">:=</span> <span className="pl-s1">cache</span>[<span className="pl-s1">n</span>]; <span className="pl-s1">ok</span>  {'{'}</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>              <span className="pl-k">return</span> <span className="pl-s1">v</span></span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>          {'}'}</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>          <span className="pl-s1">cache</span>[<span className="pl-s1">n</span>] <span className="pl-c1">=</span> <span className="pl-en">fn</span>(<span className="pl-s1">n</span>)</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>          <span className="pl-k">return</span> <span className="pl-s1">cache</span>[<span className="pl-s1">n</span>]</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span>      {'}'}</span></pre>
                        <pre className=" bg-[#388bfd1a]"><span >  {'}'}</span></pre>
                        <div className="rounded-tl-none shadow-xl bg-[#1f6feb] absolute color-fg-on-emphasis rounded-md font-bold flex items-center js-type-row p-2 f5 row-is-visible">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" aria-hidden="true" className="mr-1"><path d="M5.5 8.75282C5.5 8.33863 5.83569 8.00282 6.25 8.00282C6.66415 8.00282 7 8.33861 7 8.75282V10.2489C7 10.6631 6.66431 10.9989 6.25 10.9989C5.83569 10.9989 5.5 10.6631 5.5 10.2489V8.75282Z"></path><path d="M10.5 8.75282C10.5 8.33863 10.1643 8.00282 9.75 8.00282C9.33551 8.00282 9 8.33881 9 8.75282V10.2489C9 10.6631 9.33569 10.9989 9.75 10.9989C10.1643 10.9989 10.5 10.6631 10.5 10.2489V8.75282Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M5.04443 0.0297942C6.05371 -0.0606599 7.3667 0.00708908 8 0.919809C8.6333 0.00708908 9.94629 -0.0606599 10.9556 0.0297942C12.1118 0.145761 13.0854 0.543222 13.6328 1.12708C14.5825 2.1648 14.6267 4.34144 14.1685 5.5398C14.2146 5.74464 14.2585 5.95216 14.29 6.17176C15.1366 6.39482 16 7.59408 16 8.45167V10.0717C16 10.5215 15.79 10.9314 15.4199 11.2114C13.3044 12.7835 10.6672 14.0012 8 14.0012C5.33276 14.0012 2.69556 12.7835 0.580078 11.2114C0.209961 10.9314 0 10.5215 0 10.0717V8.45167C0 7.59408 0.863428 6.39482 1.70996 6.17176C1.7416 5.95216 1.7855 5.74461 1.83154 5.5398C1.37329 4.34144 1.41748 2.1648 2.36719 1.12708C2.91455 0.543222 3.88818 0.145761 5.04443 0.0297942ZM8 12.5014C9.93994 12.5014 11.8501 11.6426 13 11.0028V6.65907C11.1445 7.37782 9.00928 7.00721 8.00146 5.34229H7.99854C6.99072 7.00721 4.85547 7.37782 3 6.65907V11.0028C4.1499 11.6426 6.06006 12.5014 8 12.5014ZM5 5.49879C6.64062 5.49879 7 4.20582 7 3.01832C7 1.91517 6.8125 1.50392 5.53125 1.50392C3.31396 1.50392 3.04688 2.25282 3.04688 4.00282C3.04688 5.10597 3.35938 5.49879 5 5.49879ZM11 5.49879C9.35938 5.49879 9 4.20582 9 3.01832C9 1.91517 9.1875 1.50392 10.4688 1.50392C12.686 1.50392 12.9531 2.25282 12.9531 4.00282C12.9531 5.10597 12.6406 5.49879 11 5.49879Z"></path></svg>
                            Copilot
                        </div>
                        </motion.div>
                    </div>
                    <div onClick={() => setCount(count + 1)}  className='absolute w-full z-[1]  bottom-[-60px] left-0 flex items-center justify-center mb-5'>
                        <button type="button" className='flex items-center text-white justify-between'>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" fill='currentColor' width="16" data-view-component="true" className="octicon octicon-sync mr-2">
                                <path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path>
                            </svg>
                            Replay
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</HoverCard>
  )
}

export default CopilotFeature