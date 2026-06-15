import { useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createFluentTheme } from './fluentTheme'
import { ThemeModeContext } from './themeModeContext'

/**
 * Provee el tema Fluent y la capacidad de alternar entre modo claro/oscuro.
 */
export function ThemeModeProvider({ children, defaultMode = 'dark' }) {
  const [mode, setMode] = useState(defaultMode)

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => setMode((current) => (current === 'light' ? 'dark' : 'light')),
    }),
    [mode],
  )

  const theme = useMemo(() => createFluentTheme(mode), [mode])

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}
