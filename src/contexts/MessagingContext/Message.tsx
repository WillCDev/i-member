import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { fadein, fadeout } from '@/constants/keyframes'

export interface MessageConfig {
  message: ReactNode
  duration: number
}

const MessageWrapper = styled.div<{ $duration: number }>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  opacity: 1;
  pointer-events: none;
  animation: ${fadein} 500ms ease-in-out,
    ${fadeout} 500ms ease-in ${({ $duration }) => $duration - 1000}ms forwards;
`

export const Message: FC<MessageConfig> = ({ message, duration }) => (
  <MessageWrapper $duration={duration}>
    <CenteredContent>{message}</CenteredContent>
  </MessageWrapper>
)
