import React from 'react';
import openness from '../../image/maximize-circle.svg';
import responsibility from '../../image/global-edit.svg';
import innovation from '../../image/cpu-charge.svg';
import quality from '../../image/ranking.svg';
import css from './Values.module.css';

export default function Values() {
  return (
    <>
      <div className={css.titleWrapp}>
        <p className={css.title}>MAIN VALUES OF OUR COMPANY</p>
      </div>
      <div className={css.textWrapp}>
        <p className={css.text}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world&#39;s energy needs.
        </p>
      </div>
      <div className={css.frame}>
        <div className={css.group}>
          <div className={css.overlapGroup}>
            <div className={css.rectangle} />
            <div className={css.textWrapper}>OPENNESS</div>
            <p className={css.div}>
              to the world, people, new ideas and projects
            </p>
            <img className={css.icons} src={openness} alt="" />
          </div>
        </div>
        <div className={css.overlapWrapper}>
          <div className={css.overlapGroup}>
            <img className={css.icons} src={responsibility} alt="" />
            <div className={css.rectangle} />
            <div className={css.textWrapper}>RESPONSIBILITY</div>
            <p className={css.div}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </div>
        </div>
        <div className={css.group}>
          <div className={css.overlapGroup}>
            <img className={css.icons} src={innovation} alt="" />
            <div className={css.rectangle} />
            <div className={css.textWrapper}>INNOVATION</div>
            <p className={css.div}>
              we use the latest technology to implement non-standard solutions
            </p>
          </div>
        </div>
        <div className={css.overlapWrapper}>
          <div className={css.overlapGroup}>
            <img className={css.icons} src={quality} alt="" />
            <div className={css.rectangle} />
            <div className={css.textWrapper}>QUALITY</div>
            <p className={css.div}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
