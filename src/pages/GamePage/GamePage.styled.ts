import styled from '@emotion/styled'
import { Animation } from '@/constants/styles'
import { GameBoard } from './GameBoard'

export const CardGrid = styled('div')<{ hasError?: boolean }>`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 80vh;
  width: 80vh;
  max-width: 95vw;
  max-height: 95vw;
  gap: 12px;
  ${({ hasError }) => hasError && Animation.Shaking}
`

export const AnimatedGameBoard = styled(GameBoard)`
  ${Animation.FadeIn('2s')};
`
