import { FC } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouter } from './AppRouter'
import { MessagingContextProvider } from './contexts/MessagingContext'

export const App: FC = () => (
  <ThemeProvider theme={{}}>
    <CssBaseline />
    <MessagingContextProvider>
      <AppRouter />
    </MessagingContextProvider>
  </ThemeProvider>
)
