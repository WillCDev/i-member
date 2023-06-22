import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import { Message, MessageConfig } from './Message'
import { wait } from '@/utils'

interface MessageContext {
  showMessage: (config: MessageConfig) => void
}

const MessagingContext = createContext<MessageContext>({ showMessage: () => undefined })

export const useMessaging = () => useContext<MessageContext>(MessagingContext)

interface Props {
  children: ReactNode
}

export const MessagingContextProvider: FC<Props> = ({ children }) => {
  const messageQueue = useRef<MessageConfig[]>([])
  const [current, setCurrent] = useState<MessageConfig | null>()

  const showMessage = useCallback((config: MessageConfig) => {
    messageQueue.current.unshift(config)
    triggerMessage()
  }, [])

  const triggerMessage = async () => {
    const [newMessage, ...newQueue] = messageQueue.current
    if (current) return
    if (!newMessage) return

    setCurrent(newMessage)
    messageQueue.current = newQueue
    await wait(newMessage.duration!)
    setCurrent(null)
    triggerMessage()
  }

  return (
    <MessagingContext.Provider value={{ showMessage }}>
      {!!current && <Message {...current} />}
      {children}
    </MessagingContext.Provider>
  )
}
