import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { MainPageWrapper } from '@/components/MainPageWrapper'
import { AnimatedGameBoard } from './GamePage.styled'
import { wait } from '@/utils'
import { Paths, getPath } from '@/constants/paths'

export const GamePage: FC = () => {
  const navigate = useNavigate()
  const [isComplete, setIsComplete] = useState(false)

  const onGameComplete = async () => {
    await wait(6000)
    setIsComplete(true)
    await wait(1800)
    navigate(getPath(Paths.Home))
  }

  return (
    <MainPageWrapper transitioning={isComplete}>
      <CenteredContent>
        <AnimatedGameBoard onCompleted={onGameComplete} />
      </CenteredContent>
    </MainPageWrapper>
  )
}
