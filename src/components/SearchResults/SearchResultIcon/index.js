import React from 'react';
import cc from 'classcat';

import { ReactComponent as Bing } from './icons/Bing.svg';
import { ReactComponent as Cisco } from './icons/Cisco.svg';
import { ReactComponent as Confluence } from './icons/Confluence.svg';
import { ReactComponent as Desk } from './icons/Desk.svg';
import { ReactComponent as Google } from './icons/Google.svg';
import { ReactComponent as GoogleDrive } from './icons/GoogleDrive.svg';
import { ReactComponent as Inbenta } from './icons/Inbenta.svg';
import { ReactComponent as KnowledgeOwl } from './icons/KnowledgeOwl.svg';
import { ReactComponent as NoLogo } from './icons/NoLogo.svg';
import { ReactComponent as Okta } from './icons/Okta.svg';
import { ReactComponent as Parature } from './icons/Parature.svg';
import { ReactComponent as Salesforce } from './icons/Salesforce.svg';
import { ReactComponent as YouTube } from './icons/YouTube.svg';
import { ReactComponent as ZenDesk } from './icons/ZenDesk.svg';

import classes from './styles.module.scss';

const iconsByType = {
  default: NoLogo,
  bing: Bing,
  cisco: Cisco,
  confluence: Confluence,
  desk: Desk,
  google: Google,
  googledrive: GoogleDrive,
  inbenta: Inbenta,
  knowledgeowl: KnowledgeOwl,
  okta: Okta,
  parature: Parature,
  salesforce: Salesforce,
  youtube: YouTube,
  zendesk: ZenDesk,
};

export default function SearchResultIcon({ type, className = '' }) {
  const IconComponent = iconsByType[type] ?? iconsByType.default;
  return <IconComponent className={cc([classes['search-result-icon'], className])} />;
}
