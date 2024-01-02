import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../utils/hooks/window/useWindow';
import Style from './cardCarrussel.module.css'

export default function CardCarrousel( { components, interval = 5000}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const width = useWindowSize();
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
      }, interval);
  
      return () => clearInterval(intervalId);
    }, [components.length, interval]);
    
    return (
        <section className={Style.carrousel}>
          {components.map((component, index) => (
            <div key={index} style={{marginTop: '30px',width: `${width <= 1024 ? '100%' : '300px'}`}}>
                {component}
            </div>
          )).slice(currentIndex, currentIndex + 5)}
        </section>
    )
}