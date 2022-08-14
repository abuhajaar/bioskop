import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Bioskop</h2>
        <nav className={classes.header__content__navbar}>
          <ul>
            <li>
              <a>Menu</a>
            </li>
            <li>
              <a>Trending</a>
            </li>
            <li>
              <a>Superhero</a>
            </li>
          </ul>
        </nav>
        <button className={classes.header__content__button}>Daftar Akun</button>
      </div>
    </header>
  );
};

export default Header;
