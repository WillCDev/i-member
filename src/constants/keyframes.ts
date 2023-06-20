import { keyframes } from '@emotion/react'

export const shaking = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
`

export const flashing = keyframes`
    0% { opacity: 0.1; }
    50% { opacity: 0.9; }
    100% { opacity: 0; }
`

export const washout = keyframes`
    100% {
    background: white;
    }
`

export const fadeout = keyframes`
    0% { opacity: 1; }
    100% { opacity: 0; }
`

export const fadein = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`
