import { Box } from '@mui/material'
import InfoCard from '../molecules/InfoCard'

/**
 * Organismo: cuadrícula responsiva de tarjetas informativas.
 * @param {{ items: Array<{ title: string, description: string, icon?: React.ReactNode }> }} props
 */
export default function FeatureGrid({ items }) {
  return (
    <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
      {items.map((item) => (
        <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </Box>
  )
}
