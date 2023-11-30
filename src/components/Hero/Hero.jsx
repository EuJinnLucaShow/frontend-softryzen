import React from 'react';
import css from './Hero.module.css';
import arrowRight from '../../image/arrow-right.svg';
import WindTurbine from '../../image/wind-turbine-clean-energy.png';

export default function Hero() {
  return (
    <div className={css.wrapper}>
      <div className={css.label}>
        <p className={css.renewableenergyfor}>RENEWABLE ENERGY FOR ANY TASK</p>
      </div>
      <div className={css.text}>
        <p className={css.textWrapper}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </p>
      </div>
      <div className={css.btn}>
        <div className={css.btnText}>Learn more</div>
        <div className={css.vuesaxArrow}>
          <img alt="Vuesax linear arrow" src={arrowRight} />
        </div>
      </div>
      <div className={css.box}>
        <div className={css.rectangle} />
      </div>
      <div className={css.adress}>
        <p className={css.adressText}>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </p>
      </div>
      <div className={css.mail}>
        <a
          className={css.mailText}
          href="mailto:office@ecooptima.com.ua"
          rel="noopener noreferrer"
          target="_blank"
        >
          office@ecosolution.com
        </a>
      </div>
      <div className={css.imageWrapp}>
        <img className={css.image} alt="Wind turbine clean" src={WindTurbine} />
      </div>
    </div>
  );
}
