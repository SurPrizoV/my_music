import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login'
import Registration from './pages/auth/Registration'
import Main from './components/Main'
import Favorites from './pages/favorites'
import NotFound from './pages/not-found'
import Playlist from './pages/selections'
import ProtectedRoute from './components/protected-route/ProtectedRoute'
import * as Styled from './styles'

function AppRoutes({ token }) {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/registration"
          element={token ? <Navigate to="/" /> : <Registration />}
        />

        <Route element={<ProtectedRoute token={token} />}>
          <Route
            path="/"
            element={
              <Styled.Wrapper>
                <Main />
              </Styled.Wrapper>
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlist/:id" element={<Playlist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
