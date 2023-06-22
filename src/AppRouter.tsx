import { FC, memo } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { GamePage } from './pages/GamePage'
import { Paths } from './constants/paths'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" Component={HomePage} />
      <Route path={Paths.Play} Component={GamePage} />
    </Routes>
  </BrowserRouter>
)

export const AppRouter = memo(Router)
