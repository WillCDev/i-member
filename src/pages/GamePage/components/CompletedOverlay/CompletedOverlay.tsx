import { FC, useRef, useEffect } from 'react'
import ReactConfetti from 'react-confetti'
import { useMessaging } from '@/contexts/MessagingContext'
import { Colors } from '@/constants/styles'
import { Message } from '../Messages'

export const CompletedOverlay: FC = () => {
  const messageShownRef = useRef(false)
  const { showMessage } = useMessaging()

  useEffect(() => {
    if (!messageShownRef.current) {
      messageShownRef.current = true

      showMessage({
        message: (
          <Message color={Colors.VibrantGreen} duration={8000}>
            Winner!!!!
          </Message>
        ),
        duration: 8000,
      })
    }
  }, [])

  return (
    <ReactConfetti
      initialVelocityX={5}
      initialVelocityY={100}
      gravity={0.1}
      numberOfPieces={500}
    />
  )
}
