import React from "react";

const LoadSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40px"
      height="40px"
    >
      <circle cx="12" cy="12" r="10" stroke="#000" fill="none">
        <animate
          attributeName="stroke-dashoffset"
          dur="2s"
          repeatCount="indefinite"
          from="0"
          to="502"
        />
        <animate
          attributeName="stroke-dasharray"
          dur="2s"
          repeatCount="indefinite"
          values="150.6 100.4;1 250;150.6 100.4"
        />
      </circle>
    </svg>
  );
};

export default LoadSvg;
