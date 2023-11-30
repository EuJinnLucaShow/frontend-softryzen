import React from 'react';
import logo from '../../image/logo.svg';
import menu from '../../image/menu.svg';
// import ellipse from '../../image/ellipse-1.svg';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.box}>
        <div className={css.group}>
          <p className={css.greenergyforlife}>
            <span className={css.textWrapper}>GREEN</span>
            <span className={css.span}>
              ERGY
              <br />
              FOR LIFE
            </span>
          </p>
          <div className={css.div}>ecosolution</div>
          <img className={css.bgasset} alt="Bgasset" src={logo} />
        </div>
      </div>
      <div className={css.frame}>
        <img alt="menu" src={menu} />
      </div>
    </header>
  );
}
