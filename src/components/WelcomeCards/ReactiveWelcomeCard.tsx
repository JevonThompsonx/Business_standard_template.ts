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

  return (
    <div className="aspect-video max-w-[90%] h-auto max-h-[80%] mx-auto mt-28 mb-[5vh]">
      {isMobile ? (
        <HomeWelcomeCardMobile />
      ) : (
        <HomeWelcomeCardDesktop />

      )}
    </div>
  );
};

export default ReactiveWelcomeCard;
