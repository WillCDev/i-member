import { css } from '@emotion/react'
import { fadein, fadeout, flashing, shaking, washout } from './keyframes'

export const Colors = {
  RichBlack: '#001219',
  MidnightGreen: '#005f73',
  DarkCyan: '#0a9396',
  TiffanyBlue: '#94d2bd',
  Vanilla: '#e9d8a6',
  Gamboge: '#ee9b00',
  AlloyOrange: '#ca6702',
  Rust: '#bb3e03',
  Rufous: '#ae2012',
  Auburn: '#9b2226',
  White: '#ffffff',
}

export const Shadow = {
  Standard: '0px 0px 11px 1px rgba(0,0,0,0.64)',
  HoverLight: '0px 0px 17px 0px rgba(0,0,0,0.6)',
  Hover: '0px 0px 27px 1px rgba(0,0,0,0.64)',
}

export const Animation = {
  Flashing: (speed = '1s') => css`
    animation: ${flashing} ${speed} ease infinite;
  `,
  Shaking: css`
    animation: ${shaking} 0.5s;
    animation-iteration-count: infinite;
  `,
  WashOut: (speed = '300ms') => css`
    animation: ${washout} ${speed} forwards;
  `,
  FadeOut: (speed = '300ms') => css`
    animation: ${fadeout} ${speed} forwards;
  `,
  FadeIn: (speed = '300ms') => css`
    animation: ${fadein} ${speed} forwards;
  `,
}
