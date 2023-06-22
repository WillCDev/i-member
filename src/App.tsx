import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { HomePage } from './pages/HomePage'
import { GamePage } from './pages/GamePage'
import { Paths } from './constants/paths'

export const App: FC = () => (
  <ThemeProvider theme={{}}>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={HomePage} />
        <Route path={Paths.Play} Component={GamePage} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
