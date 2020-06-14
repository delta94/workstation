import React from 'react';

import classes from '../styles.module.scss';

export default function MinimizeIcon() {
  return (
    <svg
      className={classes['minimize-icon']}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 5.292 5.292"
      height="20"
      width="20"
    >
      <g fill="currentColor">
        <path className={classes.right} d="M.309 5.292l1.156-1.157.807.813.008-1.938-1.92.022.795.794h.003L0 4.982z" />
        <path
          className={classes.left}
          d="M4.983 0L3.827 1.157 3.019.344l-.007 1.938 1.92-.023-.796-.793h-.002L5.292.31z"
        />
      </g>
    </svg>
  );
}
