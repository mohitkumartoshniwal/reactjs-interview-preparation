import { useState, useEffect } from "react";

const MIN = 0,
  MAX = 100;

const ProgressBar = ({ value, bgColor, loaderColor, onComplete }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (value >= MIN && value <= MAX) {
      setPercent(value);
    }
    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress" style={{ "--bg-color": bgColor }}>
      <span
        className="progress__text"
        style={{
          color: percent > 49 ? "white" : "black",
        }}
      >
        {percent.toFixed()}%
      </span>
      <div
        className="progress__loader"
        style={{
          "--loader-color": loaderColor,
          //   width: `${percent}%`,
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percent}
        role="progressbar"
      ></div>
    </div>
  );
};
export default ProgressBar;
