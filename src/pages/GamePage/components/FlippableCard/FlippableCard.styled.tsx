import { Colors, Shadow } from '@/constants/styles'
import { styled, css } from '@mui/material'

export const CardWrapper = styled('div')<{ $flipped?: boolean }>`
  cursor: pointer;
  perspective: 500px;
  transition: 200ms;

  &:hover {
    transform: scale(1.05);
  }
`

export const CardInner = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15%;
  transition: 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }

  &:hover {
    box-shadow: ${Shadow.HoverLight};
  }
`

const CardFace = css`
  border-radius: 10%;
  border: 8px solid white;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20%;
  font-size: 3em;
  color: white;
  pointer-events: none;
`

export const CardBack = styled('div')`
  ${CardFace};
  background-color: ${Colors.AlloyOrange};
  svg {
    font-size: 1.3em;
  }
`

export const CardFront = styled('div')`
  ${CardFace}
  background-color: #eee;
  transform: rotateY(180deg);
`
