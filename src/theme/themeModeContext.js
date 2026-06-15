import { createContext, useContext } from 'react'

export const ThemeModeContext = createContext({ mode: 'dark', toggleMode: () => {} })

/** Hook para leer y alternar el modo de color. */
export function useThemeMode() {
  return useContext(ThemeModeContext)
}
