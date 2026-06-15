import { createTheme } from '@mui/material'

/**
 * Fluent Design tokens.
 *
 * Estos valores reproducen el lenguaje Fluent de Microsoft sobre MUI:
 * color de acento de Windows, materiales acrílico/mica, profundidad por
 * capas, esquinas redondeadas y tipografía Segoe UI Variable.
 */
export const fluentTokens = {
  // Acento de Windows (Fluent "Accent default")
  accent: '#0067c0',
  accentHover: '#0078d4',
  accentPressed: '#005ba1',
  radius: {
    control: 4, // botones, inputs
    card: 8, // tarjetas, paneles
    layer: 12, // superficies grandes
  },
  // Mica / Acrylic: superficies translúcidas con desenfoque
  acrylic: {
    light: 'rgba(252, 252, 252, 0.72)',
    dark: 'rgba(32, 32, 32, 0.72)',
  },
}

const fontFamily = [
  '"Segoe UI Variable"',
  '"Segoe UI"',
  'Inter',
  'system-ui',
  'sans-serif',
].join(', ')

/**
 * Sombras Fluent ("elevation"): suaves y de baja opacidad, en capas.
 */
const fluentShadows = (mode) => {
  const c = mode === 'light' ? '0, 0, 0' : '0, 0, 0'
  const a = mode === 'light' ? 0.13 : 0.4
  return [
    'none',
    `0 1px 2px rgba(${c}, ${a})`,
    `0 2px 4px rgba(${c}, ${a})`,
    `0 4px 8px rgba(${c}, ${a})`,
    `0 8px 16px rgba(${c}, ${a})`,
    `0 12px 24px rgba(${c}, ${a})`,
    `0 16px 32px rgba(${c}, ${a + 0.04})`,
  ]
}

/**
 * Crea un tema MUI tematizado con Fluent Design para el modo indicado.
 * @param {'light' | 'dark'} mode
 */
export function createFluentTheme(mode) {
  const isLight = mode === 'light'
  const base = fluentShadows(mode)
  // MUI espera 25 niveles de shadow; rellenamos con el más alto.
  const shadows = Array.from({ length: 25 }, (_, i) => base[i] ?? base[base.length - 1])

  return createTheme({
    palette: {
      mode,
      primary: {
        main: fluentTokens.accent,
        light: fluentTokens.accentHover,
        dark: fluentTokens.accentPressed,
      },
      background: {
        default: isLight ? '#f3f3f3' : '#202020',
        paper: isLight ? '#fbfbfb' : '#272727',
      },
      text: {
        primary: isLight ? 'rgba(0, 0, 0, 0.89)' : 'rgba(255, 255, 255, 0.89)',
        secondary: isLight ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)',
      },
      divider: isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.09)',
    },
    shape: {
      borderRadius: fluentTokens.radius.card,
    },
    typography: {
      fontFamily,
      h4: { fontWeight: 600, letterSpacing: '-0.01em' },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
      overline: { letterSpacing: '0.12em' },
    },
    shadows,
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: fluentTokens.radius.control,
            paddingInline: 16,
            transition: 'background-color 120ms ease, box-shadow 120ms ease, transform 80ms ease',
            '&:active': { transform: 'scale(0.98)' },
          },
          containedPrimary: {
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.16)',
            '&:hover': { backgroundColor: fluentTokens.accentHover },
            '&:active': { backgroundColor: fluentTokens.accentPressed },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          rounded: { borderRadius: fluentTokens.radius.card },
        },
      },
      MuiTextField: {
        defaultProps: { variant: 'filled' },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            borderRadius: fluentTokens.radius.control,
            backgroundColor: isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.06)',
            // Línea de acento inferior Fluent en foco
            '&:after': { borderBottomWidth: 2, borderBottomColor: fluentTokens.accent },
            '&:hover': {
              backgroundColor: isLight ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.08)',
            },
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: fluentTokens.radius.control,
            transition: 'background-color 120ms ease',
            '&.Mui-selected': {
              backgroundColor: isLight ? 'rgba(0, 103, 192, 0.1)' : 'rgba(0, 120, 212, 0.18)',
              // Indicador de selección Fluent (barra de acento a la izquierda)
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 3,
                height: '52%',
                borderRadius: 3,
                backgroundColor: fluentTokens.accent,
              },
            },
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: { padding: 8 },
        },
      },
    },
  })
}
