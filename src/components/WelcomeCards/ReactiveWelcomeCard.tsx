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
    <div className="h-full w-full mt-24 mb-10">
      {isMobile ? (
        <HomeWelcomeCardMobile />
      ) : (
        <HomeWelcomeCardDesktop />

      )}
    </div>
  );
};

export default ReactiveWelcomeCard;
