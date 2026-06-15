import { IconButton, Tooltip } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { useThemeMode } from '../../theme/themeModeContext'

/** Átomo: botón que alterna entre modo claro y oscuro. */
export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode()
  const isLight = mode === 'light'

  return (
    <Tooltip title={isLight ? 'Modo oscuro' : 'Modo claro'}>
      <IconButton onClick={toggleMode} color="inherit" aria-label="Alternar tema">
        {isLight ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  )
}
