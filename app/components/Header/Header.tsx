'use client';

import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        height: '5rem', // 80px = 5rem
        backgroundColor: 'background.paper',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        zIndex: (theme) => theme.zIndex.appBar,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Container maxWidth="xl" sx={{ padding: '0 20px' }}>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Typography
              variant="body2"
              component="p"
              color="primary"
              sx={{ fontWeight: 700 }}
            >
              ГЕОНОВАТОР
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" component="p" color="textPrimary">
              +375 (29) 199-13-39
            </Typography>
            <Typography variant="body2" component="p" color="textPrimary">
              +375 (25) 667-77-22
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
