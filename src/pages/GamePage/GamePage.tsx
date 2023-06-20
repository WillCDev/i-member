import { FC, useEffect, useMemo, useState } from 'react'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { MainPageWrapper } from '@/components/MainPageWrapper'
import { FlippableCard } from '@/components/FlippableCard'
import { generateGameItems, hasGameItem } from './GamePage.utils'
import { CardGrid } from './GamePage.styled'

export const GamePage: FC = () => {
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

  const handleSuccess = () => {
    setGuessedItems([...guessedItems, ...selectedItems])
    setSelectedItems([])
  }

  const handleFailure = () => {
    setSelectedItems([])
  }

  useEffect(() => {
    if (selectedItems.length === 2) {
      const timer = setTimeout(() => {
        if (selectedItems[0].label === selectedItems[1].label) {
          handleSuccess()
        } else handleFailure()
        clearTimeout(timer)
      }, 1000)

      return () => clearTimeout(timer)
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
