import styled from '@emotion/styled'
import { Animation, Colors, Shadow } from '@/constants/styles'
import { Typography } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

export const clickToPlayClass = 'clickToPlay'
export const transitioningClass = 'transitioning'
export const buttonClass = 'button'
export const rocketClass = 'rocket'

export const BigButton = styled.button`
  padding: 20px;
  border: 10px solid ${Colors.White};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background: ${Colors.Rust};
  box-shadow: ${Shadow.Standard};
  transition: 400ms cubic-bezier(0, 1.2, 0.8, 1.2);
  transition-delay: 100ms;

  &.${transitioningClass} {
  }
`

export const RocketIcon = styled(RocketLaunchIcon)`
  left: 0.1px;
  transform: translateY(0.1px);
  top: 0.1px;
  font-size: 12em;
  fill: ${Colors.White};
`

export const FlashingText = styled(Typography)`
  position: absolute;
  bottom: -80px;
  width: 100%;

  font-variant: small-caps;
  white-space: nowrap;
  color: ${Colors.White};
  text-align: center;
  opacity: 0;
`

export const HoverArea = styled.div`
  opacity: 0.95;
  position: relative;

  &:hover {
    opacity: 1;

    & .${buttonClass} {
      transform: scale(1.2) rotate(-45deg);
      box-shadow: ${Shadow.Hover};
    }

    & .${clickToPlayClass} {
      ${Animation.Flashing('2s')};
      animation-delay: 350ms;
    }

    & .${rocketClass} {
      ${Animation.Shaking}
      animation-delay: 300ms;
    }
  }

  &.${transitioningClass} {
    opacity: 1;

    & .${rocketClass} {
      position: relative;
      top: -30vh;
      left: 30vh;
      transition: 1000ms cubic-bezier(0.56, -0.46, 0.45, 1.23);
    }

    & .${buttonClass} {
      transition: 600ms ease-in;
      transition-delay: 500ms;
      transform: scale(12) rotate(-45deg);
      ${Animation.WashOut('1000ms')};
      animation-delay: 800ms;
    }
  }
`
