import { Stack, Typography } from '@mui/material'
import AcrylicSurface from '../atoms/AcrylicSurface'
import SettingToggle from '../molecules/SettingToggle'

/**
 * Organismo: panel de un grupo de ajustes (título, descripción y toggles).
 * @param {{ title: string, description: string, options: Array<{ label: string, defaultChecked?: boolean }> }} props
 */
export default function SettingsPanel({ title, description, options }) {
  return (
    <AcrylicSurface sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        {description}
      </Typography>
      <Stack spacing={1.5}>
        {options.map((option) => (
          <SettingToggle key={option.label} label={option.label} defaultChecked={option.defaultChecked} />
        ))}
      </Stack>
    </AcrylicSurface>
  )
}
