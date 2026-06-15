import AppTextField from '../atoms/AppTextField'

/**
 * Molécula: campo de formulario etiquetado con icono.
 * Combina el átomo AppTextField con un icono inicial.
 */
export default function FormField({ label, icon, value, onChange, type = 'text', ...props }) {
  return (
    <AppTextField label={label} icon={icon} value={value} onChange={onChange} type={type} {...props} />
  )
}
