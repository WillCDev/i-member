import { FC, useEffect, useMemo, useState } from 'react'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { MainPageWrapper } from '@/components/MainPageWrapper'
import { FlippableCard } from '@/components/FlippableCard'
import { generateGameItems, hasGameItem } from './GamePage.utils'
import { CardGrid } from './GamePage.styled'
import { useMessaging } from '@/contexts/MessagingContext'
import { wait } from '@/utils'

export const GamePage: FC = () => {
  const { showMessage } = useMessaging()
  const items = useMemo(() => generateGameItems(), [])

  const [selectedItems, setSelectedItems] = useState<GameItem[]>([])
  const [guessedItems, setGuessedItems] = useState<GameItem[]>([])

  const handleSelectCard = (item: GameItem) => {
    if (selectedItems.length === 2) return
    if (selectedItems.length === 1 && selectedItems[0].index === item.index) {
      return
    }
    setSelectedItems([...selectedItems, item])
  }

  const handleSuccess = async () => {
    await wait(1000)
    setGuessedItems([...guessedItems, ...selectedItems])
    setSelectedItems([])
  }

  const handleFailure = async () => {
    await wait(300)
    showMessage({ message: 'Oops', duration: 2000 })
    await wait(1000)
    setSelectedItems([])
  }

  useEffect(() => {
    if (selectedItems.length === 2) {
      if (selectedItems[0].label === selectedItems[1].label) {
        handleSuccess()
      } else handleFailure()
    }
  }, [selectedItems])

  return (
    <MainPageWrapper>
      <CenteredContent>
        <CardGrid>
          {items.map((item) => (
            <FlippableCard
              key={item.index}
              item={item}
              selected={hasGameItem([...selectedItems, ...guessedItems], item.index)}
              onSelect={() => handleSelectCard(item)}
            />
          ))}
        </CardGrid>
      </CenteredContent>
    </MainPageWrapper>
  )
}
