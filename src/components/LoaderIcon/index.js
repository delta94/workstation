import React from 'react';

import classes from './styles.module.scss';

export default function LoaderIcon({
  size = 32,
  strokeWidth = 3,
  strokeLinecap = 'round',
  color = 'var(--primary)',
  secondaryColor = 'var(--secondary100)',
  spinnerSize = 0.33,
  duration = '750ms',
  label = 'loader',
  ...otherProps
}) {
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharrayLength = circumference * spinnerSize;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      stroke={color}
      aria-label={label}
      fill="none"
      fillRule="evenodd"
      strokeWidth={strokeWidth}
      {...otherProps}
    >
      <circle stroke={secondaryColor} cx="50%" cy="50%" r={radius} />
      <circle
        stroke={color}
        strokeLinecap={strokeLinecap}
        cx="50%"
        cy="50%"
        r={radius}
        style={{
          animationDuration: duration,
          strokeDasharray: `${strokeDasharrayLength} ${circumference - strokeDasharrayLength}`,
        }}
        className={classes.spinner}
      />
    </svg>
  );
}
