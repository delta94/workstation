import React from 'react';
import cc from 'classcat';

import { ReactComponent as Category } from './icons/Category.svg';
import { ReactComponent as CategoryActive } from './icons/CategoryActive.svg';

import classes from './styles.module.scss';

export default function FolderIcon({ isActive, className = '' }) {
  const IconComponent = isActive ? CategoryActive : Category;
  return <IconComponent className={cc([classes['folder-icon'], className])} />;
}
