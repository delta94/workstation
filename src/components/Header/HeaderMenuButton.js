import React, { useRef, useState } from 'react';
import cc from 'classcat';

import IconButton from '../IconButton';
import HeaderMenu from '../HeaderMenu';

import { ReactComponent as DotsIcon } from './icons/dots.svg';
import classes from './styles.module.scss';
import useClickOutside from '../../hooks/useClickOutside';

export default function HeaderMenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setIsMenuOpen(false));

  return (
    <div ref={menuRef} className={cc([classes['menu-container'], classes['icon-button']])}>
      <IconButton className={classes['icon-button']} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <DotsIcon />
      </IconButton>
      <HeaderMenu setIsOpen={setIsMenuOpen} className={cc([classes['header-menu'], { [classes.show]: isMenuOpen }])} />
    </div>
  );
}
