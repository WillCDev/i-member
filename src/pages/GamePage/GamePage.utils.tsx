import { shuffle } from '@/utils'
import { Emojis } from './Emojis.config'

export const generateGameItems = (): GameItem[] => {
  const duplicatedList: GameItem[] = Emojis.map((item) => [
    { ...item, index: `${item.label}-0` },
    { ...item, index: `${item.label}-1` },
  ]).flat()

  return shuffle(duplicatedList)
}

export const hasGameItem = (list: GameItem[], itemIndex: string): boolean =>
  list.some(({ index }) => index === itemIndex)
