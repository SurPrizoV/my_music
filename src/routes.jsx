import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'
import Home from './pages/home'
import Favorites from './pages/favorites'
import NotFound from './pages/not-found'
import SelectionPlaylist from './pages/selections'
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import * as Styled from './styles'

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <Styled.Wrapper>
                <Home />
              </Styled.Wrapper>
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlist/:id" element={<SelectionPlaylist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
