import React, { PropsWithChildren, useEffect, useState } from "react";
import { Icon } from "semantic-ui-react";

const Carousel = ({ children, show }: PropsWithChildren<any>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prev} className="left-arrow">
            <Icon name="angle left" />
          </button>
        )}

        <div className="carousel-content-wrapper">
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>

        {currentIndex < length - show && (
          <button onClick={next} className="right-arrow">
            <Icon name="angle right" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
