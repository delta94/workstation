import React from 'react';

// styles
import './styles.scss';
import cc from 'classcat';

export default function ActionBotLayout({ className = '' }) {
  const urlParams = new URLSearchParams(window.location.search);
  const platform = urlParams.get('platform');
  const iframeSrc = `https://cdn.walkme.com/sdk/apps/actionbot-ui/0.1/index.html?platform=${platform}`;

  return <iframe className={cc(['action-bot-iframe', className])} src={iframeSrc} frameBorder="0"></iframe>;
}
