import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

/**
 * Molécula: item de navegación (icono + etiqueta) con estado seleccionado
 * estilo Fluent (barra de acento a la izquierda definida en el tema).
 */
export default function NavItem({ icon, label, selected, onClick }) {
  return (
    <ListItemButton selected={selected} onClick={onClick} sx={{ mb: 0.5 }}>
      <ListItemIcon sx={{ minWidth: 40, color: selected ? 'primary.main' : 'text.secondary' }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} primaryTypographyProps={{ fontWeight: selected ? 600 : 500 }} />
    </ListItemButton>
  )
}
