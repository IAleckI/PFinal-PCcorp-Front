import React, { useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import styles from "../Carrusel/carouselLanding.module.css";
import pc1 from "../../Assets/Img/CarruselImgs/pc1.jpg";
import pc2 from "../../Assets/Img/CarruselImgs/pc2.jpg";
import pc3 from "../../Assets/Img/CarruselImgs/pc3.jpg";
import pc4 from "../../Assets/Img/CarruselImgs/pc4.jpg";

const images = [pc1, pc2, pc3, pc4];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const imagesLength = images.length;
  const [direction, setDirection] = useState(1);
  const [resetInterval, setResetInterval] = useState(false);

  const goToNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    setDirection(1);
    handleResetInterval();
  }, [imagesLength]);

  const transitions = useTransition(index, {
    from: {
      transform: `translate3d(${direction === 1 ? "100%" : "-100%"}, 0, 0)`,
    },
    enter: { transform: "translate3d(0%, 0, 0)" },
    leave: {
      transform: `translate3d(${direction === 1 ? "-100%" : "100%"}, 0, 0)`,
    },
  });

  const handleResetInterval = () => {
    setResetInterval(true);
    setTimeout(() => {
      setResetInterval(false);
    });
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!resetInterval) {
        goToNext();
      } else {
        setResetInterval(false);
      }
    }, 8000);
    return () => clearTimeout(interval);
  }, [goToNext, resetInterval]);

  return (
    <div className={styles["carousel-container"]}>
      {transitions((style, i) => {
        const currentIndex = i % imagesLength;
        const currentImage = images[currentIndex];
        return (
          <animated.div
            key={currentIndex}
            className={styles["carousel-image"]}
            style={{
              ...style,
              backgroundImage: `url(${currentImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}

          />
          
        );
            
      })}
    </div>
  );
};

export default Carousel;