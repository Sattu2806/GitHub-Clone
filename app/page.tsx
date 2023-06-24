import Image from 'next/image';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero-section/Hero';
import StickyNav from './components/Navbar/StickyNav';
import Productivity from './components/Productivity/Productivity';
import Collaboration from './components/Collaboration/Collaboration';
import Security from './components/Security/Security';
import Globe from './components/Footer/Globe';
import Footer from './components/Footer/Footer';

export default function Home() {
  
  return (
    <div className=' '>
      <div className='relative z-50'>
        <div className='absolute'>
        <Navbar/>
        </div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <div className='relative'>
            <img className='absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image' width='4377' src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp" alt="" />
          </div>
          <div className='hero-section px-3 '>
            <Hero/>
          </div>
          <StickyNav/>
          <div id='productivity' className='home-campaign-productivity px-4 pt-8 overflow-hidden'>
            <Productivity/>
          </div>
          <div id='collaboration' className='home-campaign-productivity px-4 pt-8  overflow-hidden'>
            <Collaboration/>
          </div>
          <div id='security' className='home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden'>
            <Security/>
          </div>
         <Globe/>
          <div className='max-w-[1280px] mx-auto relative z-[2]  px-5'>
            <ul className='lg:w-9/12 text-[14px] pt-16 text-[#7d8590] space-y-1'>
              <li><sup id="footnote-1">1</sup> The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced Security, a commissioned study conducted by Forrester Consulting, 2022. Results are for a composite organization based on interviewed customers.</li>
              <li><sup id="footnote-2">2</sup> GitHub, Octoverse 2022 The state of open source software.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
