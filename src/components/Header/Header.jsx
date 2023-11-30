import React from 'react';
import logo from '../../image/logo.svg'
import menu from '../../image/menu.svg'
import ellipse from '../../image/ellipse-1.svg'
import { GetTouch, GetTouchText, Menu, HeaderWrrap } from './Header.styled';

export default function Header() {
  return (
    <HeaderWrrap>
        <div><img src={ logo } alt="logo ecosolution"/><span>ecosolution</span><article>GREENERGY FOR LIFE</article></div>
        <div><Menu><img src={ menu } alt="menu"/></Menu><GetTouch><GetTouchText>Get in touch</GetTouchText><img src={ ellipse } alt="ellipse"/></GetTouch></div>
    </HeaderWrrap>
  );
}

