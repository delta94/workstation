import React, { useContext, useState, useEffect } from 'react';

// styles
import './styles.scss';
import cc from 'classcat';

export default function ActionBotLayout({ className = '' }) {
  // const iframeSrc = `https://cdn2.walkmedev.com/adir/teach-me-ui/index.html?platform=web#/`;
  const iframeSrc = `http://localhost/wmTests/action-bot-ui/dist/index.html?platform=web`;

  return <iframe className={cc(['action-bot-iframe', className])} src={iframeSrc} frameBorder="0"></iframe>;
}
