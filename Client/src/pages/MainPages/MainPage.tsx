import { Box } from '@mui/material';
import { type FC } from 'react';
import MainPageHeader from './partials/MainPageHeader';
import { Outlet } from 'react-router-dom';
import MainPageNavigation from './partials/MainPageNavigation';

const MainPage: FC = () => {
  return (
    <Box sx={{ pt: 5.5, pb: 13, px: 2 }}>
      <MainPageHeader />
      <Outlet />
      <MainPageNavigation />
    </Box>
  );
};

export default MainPage;
