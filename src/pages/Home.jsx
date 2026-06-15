import { Stack } from '@mui/material'
import { Bolt, ViewQuilt } from '@mui/icons-material'
import HeroPanel from '../components/organisms/HeroPanel'
import FeatureGrid from '../components/organisms/FeatureGrid'

const features = [
  {
    icon: <Bolt />,
    title: 'Configuración rápida',
    description: 'Tailwind y Material UI tematizado con Fluent ofrecen un layout limpio y responsivo.',
  },
  {
    icon: <ViewQuilt />,
    title: 'Páginas modernas',
    description: 'Componentes reutilizables (Atomic Design) que mantienen la experiencia consistente.',
  },
]

export default function Home() {
  return (
    <Stack spacing={4}>
      <HeroPanel
        title="Bienvenido a RestroCloud"
        description="Tu panel con Fluent Design está listo. Navega por la barra lateral entre Inicio, Ajustes e Inicio de sesión con cambio de tema fluido."
        actionLabel="Explorar panel"
      />
      <FeatureGrid items={features} />
    </Stack>
  )
}
