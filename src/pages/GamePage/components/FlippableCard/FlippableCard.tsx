import { FC } from 'react'
import { CardBack, CardFront, CardInner, CardWrapper } from './FlippableCard.styled'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

interface Props {
  item: GameItem
  selected: boolean
  onSelect: () => void
}

export const FlippableCard: FC<Props> = ({ item, selected, onSelect }) => {
  return (
    <CardWrapper onClick={onSelect}>
      <CardInner className={selected ? 'flipped' : ''}>
        <CardFront>
          <span role="img" aria-label={item.label}>
            {item.emoji}
          </span>
        </CardFront>
        <CardBack>
          <RocketLaunchIcon />
        </CardBack>
      </CardInner>
    </CardWrapper>
  )
}
