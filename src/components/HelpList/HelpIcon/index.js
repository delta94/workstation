import React from 'react';
import cc from 'classcat';

import { ReactComponent as Article } from './icons/Article.svg';
import { ReactComponent as Shuttle } from './icons/Shuttle.svg';
import { ReactComponent as Survey } from './icons/Survey.svg';
import { ReactComponent as Video } from './icons/Video.svg';
import { ReactComponent as Walkthru } from './icons/Walkthru.svg';

import classes from './styles.module.scss';

const iconsByType = {
  article: Article,
  shuttle: Shuttle,
  video: Video,
  'smart-walkthru': Walkthru,
  survey: Survey,
};

export default function HelpIcon({ type, className = '' }) {
  const IconComponent = iconsByType[type];
  return <IconComponent className={cc([classes['help-icon'], className])} />;
}
