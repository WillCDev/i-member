import { FC } from 'react'
import { Animation, Colors } from '@/constants/styles'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const PageWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: ${Colors.Auburn};
  background: linear-gradient(
    31deg,
    ${Colors.DarkCyan} 0%,
    ${Colors.MidnightGreen} 28%,
    ${Colors.White} 100%
  );
`

const OverlayWashout = css`
  background: transparent;
  opacity: 1;
  ${Animation.WashOut('800ms', '800ms')}
`

const Overlay = styled.div<{ $transitioning?: boolean }>`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${Colors.White};
  z-index: 1;
  pointer-events: none;

  ${Animation.FadeOut('1000ms')}
  ${({ $transitioning }) => $transitioning && OverlayWashout}
`

type Props = {
  children: React.ReactNode
  transitioning?: boolean
}

export const MainPageWrapper: FC<Props> = ({ children, transitioning }) => (
  <PageWrapper>
    <Overlay $transitioning={transitioning} />
    {children}
  </PageWrapper>
)
