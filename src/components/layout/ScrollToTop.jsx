import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathName } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'instant', 
    });
  }, [pathName]);

  return null;
};

export default ScrollToTop;