import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AppRoutes from './routes'
import * as Styled from './styles'
import { ThemeContextProvider } from './context/theme'
import { checkUser } from './redux/slices/userActions'
import Bar from './components/bar/Bar'

function App() {
  const { userToken } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if (userToken) dispatch(checkUser(localStorage.getItem('refreshToken')))
  }, [])

  return (
    <ThemeContextProvider>
      <Styled.GlobalStyle auth={!userToken} />
      <AppRoutes />
      <Bar />
    </ThemeContextProvider>
  )
}

export default App
