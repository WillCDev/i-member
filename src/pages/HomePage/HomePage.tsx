import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainPageWrapper } from '@/components/MainPageWrapper'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { Paths, getPath } from '@/constants/paths'
import { wait } from '@/utils'
import {
  BigButton,
  FlashingText,
  HoverArea,
  RocketIcon,
  buttonClass,
  clickToPlayClass,
  rocketClass,
  transitioningClass,
} from './HomePage.styled'

export const HomePage: FC = () => {
  const navigate = useNavigate()
  const [transitioning, setTransitioning] = useState(false)

  const playGame = async () => {
    if (!transitioning) {
      setTransitioning(true)
      await wait(1800)
      navigate(getPath(Paths.Play))
    }
  }

  return (
    <MainPageWrapper transitioning={transitioning}>
      <CenteredContent>
        <HoverArea className={transitioning ? transitioningClass : ''}>
          <BigButton onClick={playGame} className={buttonClass}>
            <RocketIcon className={rocketClass} />
          </BigButton>

          {!transitioning && (
            <FlashingText className={clickToPlayClass} variant="h4">
              Click To Play
            </FlashingText>
          )}
        </HoverArea>
      </CenteredContent>
    </MainPageWrapper>
  )
}
