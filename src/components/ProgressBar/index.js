import React, { useEffect, useState } from 'react';

import classes from './styles.module.scss';

export default function ProgressBar({ percent }) {
  const [completedPercent, setCompletedPercent] = useState(0);

  useEffect(() => {
    setCompletedPercent(percent);
  }, [percent]);

  return (
    <div className={classes['progress-bar']}>
      <div className={classes.title}>{completedPercent}% completed</div>
      <div className={classes['progress-bar-indicator']} style={{ '--indicator-percent': `${completedPercent}%` }} />
    </div>
  );
}
