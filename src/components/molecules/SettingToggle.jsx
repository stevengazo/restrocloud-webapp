import { Stack, Typography } from '@mui/material'
import AppSwitch from '../atoms/AppSwitch'

/**
 * Molécula: fila de ajuste con etiqueta e interruptor.
 */
export default function SettingToggle({ label, checked, defaultChecked, onChange }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography>{label}</Typography>
      <AppSwitch checked={checked} defaultChecked={defaultChecked} onChange={onChange} />
    </Stack>
  )
}
