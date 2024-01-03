import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../../utils/hooks/window/useWindow';
import Style from '../../cardCarrussel/cardCarrussel.module.css'

export default function MejorValorado({ components, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const width = useWindowSize();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [components.length, interval]);

  const filteredComponents = components.filter(
    (component) => component.rating > 4
  );

  return (
    <div className={Style.section}>
      <div className={Style.tittle}>
        <span className={Style.line_section} />
        <h2>Mejor valorados</h2>
      </div>
      <section className={Style.carrousel}>
        {filteredComponents.map((component, index) => (
          <div
            key={index}
            style={{
              marginTop: '30px',
              width: `${width <= 1024 ? '100%' : '300px'}`,
            }}
          >
            {component}
          </div>
        )).slice(currentIndex, currentIndex + 3)}
      </section>
    </div>
  );
}