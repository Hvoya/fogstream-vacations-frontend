import React, { useCallback, useEffect, useState } from 'react';

import PreloaderAnimation from 'atoms/PreloaderAnimation/PreloaderAnimation';

const Preloader = () => {
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(true);

  const preloaderToggler = useCallback(() => {
    setIsPreloaderOpen(false);
    setIsPreloaderOpen(true);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(preloaderToggler, 1500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return isPreloaderOpen ? <PreloaderAnimation /> : null;
};

export default React.memo(Preloader);
