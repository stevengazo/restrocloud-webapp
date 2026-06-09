import { Box, Button, Paper, Stack, Switch, Typography } from '@mui/material'

export default function Settings() {
  return (
    <Stack spacing={4}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4, bgcolor: 'background.paper' }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Settings Overview
        </Typography>
        <Typography color="text.secondary" paragraph>
          This page is designed for configuring your application preferences. Use the controls below to model real user settings.
        </Typography>
      </Paper>

      <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <Paper elevation={1} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Appearance
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Choose layout preferences, theme mode, and interface density for your users.
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography>Compact mode</Typography>
            <Switch defaultChecked />
          </Stack>
        </Paper>

        <Paper elevation={1} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Preferences
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Prepare the settings screen with quick toggles for notifications, privacy, and account details.
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography>Notifications</Typography>
            <Switch defaultChecked />
          </Stack>
        </Paper>
      </Box>

      <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: 1, borderColor: 'divider', bgcolor: 'background.default' }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Save Changes
        </Typography>
        <Typography color="text.secondary" paragraph>
          Use the Save button to persist user settings and keep the experience polished.
        </Typography>
        <Button variant="contained">Save settings</Button>
      </Paper>
    </Stack>
  )
}
