import React, { useEffect, useState } from 'react';
import { HomeWelcomeCardDesktop, HomeWelcomeCardMobile } from "./index.ts"
const ReactiveWelcomeCard: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for 'md' in TailwindCSS
    };

    // Set the initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // To do: 
  // [] Fix sizing 
  // [] 

  return (
    <div className="aspect-square min-h-56 max-w-[90%] md:aspect-video md:max-w-[90%] md:h-auto md:max-h-[80%] mx-auto mt-10 md:mt-28  md:mb-[5vh] landscape:md:max-h-[90vh]
               portrait:md:max-h-[75vh]
     pb-[safe-area-inset-bottom]
               pl-[safe-area-inset-left]
               pr-[safe-area-inset-right]"
      style={{
        minHeight: 'clamp(224px, 50vh, 400px)',
        marginTop: 'clamp(2rem, 5vh, 7rem)'
      }}>

      {
        isMobile ? (
          <HomeWelcomeCardMobile />
        ) : (
          <HomeWelcomeCardDesktop />

        )
      }
    </div >
  )
};

export default ReactiveWelcomeCard;
