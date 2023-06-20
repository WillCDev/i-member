import { FC } from 'react'
import { Animation, Colors } from '@/constants/styles'
import styled from '@emotion/styled'

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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: ${Colors.White};
  ${Animation.FadeOut('1000ms')}
`

type Props = {
  children: React.ReactNode
}

export const MainPageWrapper: FC<Props> = ({ children }) => (
  <PageWrapper>
    <Overlay />
    {children}
  </PageWrapper>
)
