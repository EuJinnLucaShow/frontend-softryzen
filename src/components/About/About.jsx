import React from 'react';
import css from './About.module.css';
import andrii from '../../image/andrii-duda.png';
import yurii from '../../image/yurii-turchenko.png';
import vitalii from '../../image/vitalii-shevchenko.png';
import victor from '../../image/victor-dunaev.png';

export default function About() {
  return (
    <>
      <div className={css.titleWrapp}>
        <p className={css.title}>LET’s start with small start with ourselves</p>
      </div>
      <div className={css.textWrapp}>
        <p сlassName={css.text}>
          <span className={css.spanWrapp}>ECOSOLUTION</span>
          <span className={css.span}>
            {' '}
            is the largest group of companies in Western Ukraine, which is
            engaged in the development and implementation of renewable
            environmentally friendly energy sources. We are the first privately
            owned company that received a loan from the European Bank for
            Reconstruction and Development (EBRD) and built the first wind farm
            in Western Ukraine. During the company's work, a number of projects
            in the field of energy were implemented. At the same time, new
            investment projects, in particular small hydropower and biofuels,
            are constantly being developed and developed with existing objects.
          </span>
        </p>
      </div>
      <div className={css.frame}>
        <div className={css.group}>
          <img className={css.maskGroup} alt="Mask group" src={andrii} />
          <div className={css.textWrapper}>Andrii Duda</div>
          <div className={css.div}>CEO</div>
        </div>
        <div className={css.group2}>
          <img className={css.maskGroup} alt="Mask group" src={yurii} />
          <div className={css.textWrapper}>Yurii Turchenko</div>
          <div className={css.div}>Technology officer</div>
        </div>
        <div className={css.group}>
          <img className={css.maskGroup} alt="Mask group" src={vitalii} />
          <div className={css.textWrapper}>Vitalii Shevchenko</div>
          <div className={css.div}>Director</div>
        </div>
        <div className={css.group2}>
          <img className={css.maskGroup} alt="Mask group" src={victor} />
          <div className={css.textWrapper}>Victor Dunaev</div>
          <div className={css.div}>Senior engineer</div>
        </div>
      </div>
    </>
  );
}
