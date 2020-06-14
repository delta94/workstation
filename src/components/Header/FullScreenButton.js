import React from 'react';
import walkme from '@walkme/sdk';

import IconButton from '../IconButton';

import MinimizeIcon from './icons/MinimizeIcon';
import classes from './styles.module.scss';

export default function FullScreenButton() {
  function onMinimizeClick() {
    walkme.platform.closeMe();
  }

  return (
    <IconButton className={classes['icon-button']} onClick={onMinimizeClick}>
      <MinimizeIcon />
    </IconButton>
  );
}
