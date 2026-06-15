import { Box, Stack } from '@mui/material'
import HeroPanel from '../components/organisms/HeroPanel'
import SettingsPanel from '../components/organisms/SettingsPanel'

const groups = [
  {
    title: 'Apariencia',
    description: 'Elige preferencias de diseño, modo de tema y densidad de la interfaz.',
    options: [{ label: 'Modo compacto', defaultChecked: true }],
  },
  {
    title: 'Preferencias',
    description: 'Activa los ajustes rápidos de notificaciones, privacidad y cuenta.',
    options: [{ label: 'Notificaciones', defaultChecked: true }],
  },
]

export default function Settings() {
  return (
    <Stack spacing={4}>
      <HeroPanel
        title="Configuración"
        description="Esta página permite configurar las preferencias de la aplicación. Usa los controles para modelar ajustes reales de usuario."
      />
      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        {groups.map((group) => (
          <SettingsPanel
            key={group.title}
            title={group.title}
            description={group.description}
            options={group.options}
          />
        ))}
      </Box>
      <HeroPanel
        title="Guardar cambios"
        description="Usa el botón Guardar para persistir los ajustes y mantener la experiencia pulida."
        actionLabel="Guardar ajustes"
      />
    </Stack>
  )
}
