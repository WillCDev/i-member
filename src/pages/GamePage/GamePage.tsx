import { FC } from 'react'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { MainPageWrapper } from '@/components/MainPageWrapper'
import { AnimatedGameBoard } from './GamePage.styled'

export const GamePage: FC = () => (
  <MainPageWrapper>
    <CenteredContent>
      <AnimatedGameBoard />
    </CenteredContent>
  </MainPageWrapper>
)
