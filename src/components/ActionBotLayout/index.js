import React from 'react';
import cc from 'classcat';

// styles
import classes from './styles.module.scss';

export default function ActionBotLayout({ isVisible = false }) {
  const urlParams = new URLSearchParams(window.location.search);
  const platform = urlParams.get('platform');
  const iframeSrc = `https://cdn.walkme.com/sdk/apps/actionbot-ui/0.1/index.html?platform=${platform}`;

  return (
    <iframe
      className={cc([classes['action-bot-iframe'], { [classes.invisible]: !isVisible }])}
      src={iframeSrc}
      frameBorder="0"
    ></iframe>
  );
}
