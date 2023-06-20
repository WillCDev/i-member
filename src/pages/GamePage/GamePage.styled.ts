import { Animation } from '@/constants/styles'
import { styled } from '@mui/material'

export const CardGrid = styled('div')`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 80vh;
  width: 80vh;
  max-width: 95vw;
  max-height: 95vw;
  gap: 12px;
  ${Animation.FadeIn('2s')};
`
