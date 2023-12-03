import React from 'react';
import css from './Electricity.module.css';

export default function Electricity() {
  return (
    <>
      <h3 className={css.title}> Electricity we produced for all time</h3>
      <div className={css.frame}>
        <div className={css.text}>1.134.147.814</div>
        <div className={css.div}>kWh</div>
      </div>
    </>
  );
}
