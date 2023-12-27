import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import styles from "../Carrusel/carouselLanding.module.css";
import pc1 from "../../Assets/Img/CarruselImgs/pc1.jpeg";
import pc2 from "../../Assets/Img/CarruselImgs/pc2.jpg";
import pc3 from "../../Assets/Img/CarruselImgs/pc3.jpeg";
import pc4 from "../../Assets/Img/CarruselImgs/pc4.jpeg";

const images = [pc1, pc2, pc3, pc4];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const imagesLength = images.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(index, {
    from: { transform: "translate3d(100%, 0, 0)" },
    enter: { transform: "translate3d(0%, 0, 0)" },
    leave: { transform: "translate3d(-100%, 0, 0)" },
  });

  return (
    <div className={styles["carousel-container"]}>
      {transitions((style, i) => {
        const currentIndex = i % imagesLength;
        const nextIndex = (currentIndex + 1) % imagesLength;
        const currentImage = images[currentIndex];
        const nextImage = images[nextIndex];
        return (
          <>
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
              }}
            />
            <animated.div
              key={nextIndex}
              className={styles["carousel-image"]}
              style={{
                ...style,
                backgroundImage: `url(${nextImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: "100%",
              }}
            />
          </>
        );
      })}
    </div>
  );
};

export default Carousel;
