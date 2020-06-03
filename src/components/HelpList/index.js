import React from 'react';
import cc from 'classcat';

import HelpItem from './HelpItem';
import HelpGroup from './HelpGroup';

import classes from './styles.module.scss';

export default function HelpList({ content }) {
  return (
    <ul className={classes['help-list']}>
      {content.map((node, index) => {
        if (node.type === 'category') {
          const isLastOfType = Boolean(index === content.length - 1 || content[index + 1].type !== 'category');
          return <HelpGroup key={node.id} node={node} className={cc([{ [classes['last-of-type']]: isLastOfType }])} />;
        }

        return <HelpItem key={node.id} node={node} />;
      })}
    </ul>
  );
}
