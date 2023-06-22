import { css } from '@emotion/react'
import { fadein, fadeout, flashing, shaking, washout } from './keyframes'

export const Colors = {
  RichBlack: '#001219',
  MidnightGreen: '#005f73',
  DarkCyan: '#0a9396',
  TiffanyBlue: '#94d2bd',
  Vanilla: '#e9d8a6',
  Gamboge: '#ee9b00',
  AlloyOrange: '#da7712',
  Rust: '#bb3e03',
  Rufous: '#ae2012',
  Auburn: '#9b2226',
  White: '#ffffff',
  VibrantGreen: '#58cd36',
}

export const Shadow = {
  Standard: '0px 0px 11px 1px rgba(0,0,0,0.64)',
  HoverLight: '0px 0px 17px 0px rgba(0,0,0,0.6)',
  Hover: '0px 0px 27px 1px rgba(0,0,0,0.64)',
  TextHighlight: `${Colors.TiffanyBlue} 0px 0px 20px, ${Colors.TiffanyBlue} 0 0 60px, #fff 0 0 200px`,
}

export const Animation = {
  Flashing: (speed = '1s', delay = '0ms') => css`
    animation: ${flashing} ${speed} ease infinite;
    animation-delay: ${delay};
  `,
  Shaking: css`
    animation: ${shaking} 0.5s;
    animation-iteration-count: infinite;
  `,
  WashOut: (speed = '300ms', delay = '0ms') => css`
    animation: ${washout} ${speed} forwards;
    animation-delay: ${delay};
  `,
  FadeOut: (speed = '300ms', delay = '0ms') => css`
    animation: ${fadeout} ${speed} forwards;
    animation-delay: ${delay};
  `,
  FadeIn: (speed = '300ms', delay = '0ms') => css`
    animation: ${fadein} ${speed} forwards;
    animation-delay: ${delay};
  `,
}
