import { FC } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouter } from './AppRouter'

export const App: FC = () => (
  <ThemeProvider theme={{}}>
    <CssBaseline />
    <AppRouter />
  </ThemeProvider>
)
