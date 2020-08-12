import React, { useEffect, useState } from 'react';
import cc from 'classcat';
import IconButton from '../IconButton';
import actionBotImage from './icons/action-bot.png';
import classes from './styles.module.scss';

export default function ActionBotButton({ onSelectSection, onDeselectSection, activeSection }) {
  const [isShowingActionBot, setIsShowingActionBot] = useState(false);

  function onToggleActionBot() {
    isShowingActionBot ? onDeselectSection() : onSelectSection({ contentType: 'action-bot' });
    setIsShowingActionBot(!isShowingActionBot);
  }

  useEffect(() => {
    const isActionBotContentType = !activeSection || activeSection.contentType === 'action-bot';
    setIsShowingActionBot(isActionBotContentType);
  }, [activeSection]);

  return (
    <IconButton
      onClick={onToggleActionBot}
      toggleOn={isShowingActionBot}
      className={cc([
        classes['icon-button'],
        classes['action-bot-icon'],
        { [classes['is-active']]: isShowingActionBot },
      ])}
    >
      <img src={actionBotImage} />
    </IconButton>
  );
}
