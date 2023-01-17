import React, { useState, useContext, useMemo } from 'react'
import { ThemeProvider } from 'styled-components'

export const themes = {
  light: {
    color: '#282c34',
    background: '#fff',
    name: 'light',
  },
  dark: {
    color: '#fff',
    background: '#181818',
    name: 'dark',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})

export function ThemeContextProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }

  const themeContextMemo = useMemo(
    () => ({ themeContext: currentTheme, toggleTheme }),
    [currentTheme, toggleTheme]
  )

  return (
    <ThemeContext.Provider value={themeContextMemo}>
      <ThemeProvider theme={themeContextMemo}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const theme = useContext(ThemeContext)

  if (!theme) return theme.dark

  return theme
}
