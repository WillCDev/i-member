import { Typography, styled, keyframes } from '@mui/material'
import { Shadow } from '@/constants/styles'

const grow = keyframes`
  0% { transform: scale(0.3)}
  95% { transform: scale(1.6)}
  100% { transform: scale(3)}
`

export const Message = styled(Typography)<{ color: string; duration: number }>`
  color: ${({ color }) => color};
  font-weight: 800;
  text-shadow: ${Shadow.TextHighlight};
  animation: ${grow} ${({ duration }) => duration}ms ease-in-out;
  text-align: center;
`

Message.defaultProps = {
  variant: 'h1',
}
