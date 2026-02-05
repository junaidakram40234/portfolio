import React from 'react'
import HeroSection from './HeroSection';
import Page2 from '../pages/page2.jsx';
import GlowingScrollIndicator from '../components/GlowingScrollIndicator.jsx';


const Home = () => {
  

  return (
    <div
      id="glowing-scroll-target"
      className="relative h-screen w-full overflow-y-scroll"
    >
      <HeroSection />
      <Page2/>
      <div className="fixed bottom-4 right-4 z-[8] bg-black/50 backdrop-blur-xl p-2 rounded h-32 flex items-end justify-center">
        <GlowingScrollIndicator
          scrollContainerId="glowing-scroll-target"
          direction="vertical"
        />
      </div>
    </div>
  );
}

export default Home