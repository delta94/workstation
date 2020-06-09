import React from 'react';
import walkme from '@walkme/sdk';

import IconButton from '../IconButton';

import { ReactComponent as FullscreenIcon } from './icons/fullscreen.svg';
import classes from './styles.module.scss';

export default function FullScreenButton() {
  function onMinimizeClick() {
    walkme.platform.closeMe();
  }

  return (
    <IconButton className={classes['icon-button']} onClick={onMinimizeClick}>
      <FullscreenIcon />
    </IconButton>
  );
}
