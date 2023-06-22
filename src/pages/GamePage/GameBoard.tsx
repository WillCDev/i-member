import { FC, useLayoutEffect, useMemo, useState } from 'react'
import { FlippableCard } from '@/components/FlippableCard'
import { useSuccessMessage } from '@/components/Messages'
import { generateGameItems, hasGameItem } from './GamePage.utils'
import { CardGrid } from './GamePage.styled'
import { wait } from '@/utils'

export const GameBoard: FC = () => {
  const items = useMemo(() => generateGameItems(), [])
  const showSuccessMessage = useSuccessMessage()

  const [selectedItems, setSelectedItems] = useState<GameItem[]>([])
  const [guessedItems, setGuessedItems] = useState<GameItem[]>([])
  const [hasError, setHasError] = useState(false)

  const flippedItems = [...selectedItems, ...guessedItems]

  const handleSelectCard = (item: GameItem) => {
    if (selectedItems.length === 2) return
    if (hasGameItem(flippedItems, item.index)) return
    setSelectedItems([...selectedItems, item])
  }

  const handleSuccess = async () => {
    setGuessedItems([...guessedItems, ...selectedItems])
    setSelectedItems([])
    showSuccessMessage()
  }

  const handleFailure = async () => {
    await wait(500)
    setHasError(true)
    await wait(300)
    setHasError(false)
    await wait(200)
    setSelectedItems([])
  }

  useLayoutEffect(() => {
    if (selectedItems.length === 2) {
      if (selectedItems[0].label === selectedItems[1].label) {
        handleSuccess()
      } else handleFailure()
    }
  }, [selectedItems])

  return (
    <CardGrid hasError={hasError}>
      {items.map((item) => (
        <FlippableCard
          key={item.index}
          item={item}
          selected={hasGameItem(flippedItems, item.index)}
          onSelect={() => handleSelectCard(item)}
        />
      ))}
    </CardGrid>
  )
}
