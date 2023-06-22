import { useMemo, useRef } from 'react'
import { useMessaging } from '@/contexts/MessagingContext'
import { shuffle } from '@/utils'
import { Message } from './Message'
import { Colors } from '@/constants/styles'

export const useSuccessMessage = () => {
  const messageIndex = useRef(0)
  const { showMessage } = useMessaging()

  const messages = useMemo(
    () =>
      shuffle([
        'Sweet',
        'Excellent',
        'Bodacious',
        'Alright Smartypants',
        'Tubular',
        "Call Mensa, you're on fire!",
        'Woop wooooop',
        'Wunderbar!',
      ]),
    []
  )

  return () => {
    showMessage({
      message: (
        <Message color={Colors.VibrantGreen} duration={2500}>
          {messages[messageIndex.current]}
        </Message>
      ),
      duration: 2000,
    })
    if (messageIndex.current === messages.length) messageIndex.current = 0
    else messageIndex.current += 1
  }
}
