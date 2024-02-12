import { Box, CircularProgress } from '@mui/material';
import { type FC } from 'react';

const SplashScreen: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bgcolor: '#F4F8FF',
        minHeight: '100vh',
        px: 2,
        pt: 5,
        pb: 4
      }}>
      <img src="./Umah-Logo.svg" alt="" />
      <CircularProgress
        color="inherit"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
          zIndex: 1
        }}
      />
      <img
        style={{
          width: '100%'
        }}
        src="./Image-onboarding.png"
        alt=""
      />
    </Box>
  );
};

export default SplashScreen;
