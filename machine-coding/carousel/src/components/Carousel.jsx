import { useEffect } from "react";
import { useState } from "react";

const images = [
  "https://picsum.photos/seed/1/800/500",
  "https://picsum.photos/seed/2/800/500",
  "https://picsum.photos/seed/3/800/500",
  "https://picsum.photos/seed/4/800/500",
  "https://picsum.photos/seed/5/800/500",
];

const DELAY = 2000;

const Carousel = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  function loadPreviousImage() {
    setActiveImageIndex((activeIndex) =>
      activeIndex - 1 >= 0 ? activeIndex - 1 : images.length - 1
    );
  }

  function loadNextImage() {
    setActiveImageIndex((activeIndex) =>
      activeIndex + 1 <= images.length - 1 ? activeIndex + 1 : 0
    );
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadNextImage();
    }, DELAY);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <button
        className="container__left-button"
        type="button"
        onClick={loadPreviousImage}
      >
        ◀️
      </button>
      <img
        className="container__image"
        src={images[activeImageIndex]}
        alt="carousel image"
      />
      <button
        className="container__right-button"
        type="button"
        onClick={loadNextImage}
      >
        ▶️
      </button>
    </div>
  );
};

export default Carousel;
