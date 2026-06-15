import { Box, Typography } from '@mui/material'

/** Átomo: marca/identidad del producto (overline + título). */
export default function BrandMark({ overline = 'RestroCloud', title = 'Fluent Dashboard' }) {
  return (
    <Box>
      <Typography variant="overline" color="text.secondary" display="block">
        {overline}
      </Typography>
      <Typography variant="h5">{title}</Typography>
    </Box>
  )
}
