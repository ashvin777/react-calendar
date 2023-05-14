import { useCallback, useEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  });

  const onResize = useCallback(() => {
    setSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }, [setSize]);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}
