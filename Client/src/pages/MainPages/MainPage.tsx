import { Box } from '@mui/material';
import { type FC } from 'react';
import MainPageHeader from './partials/MainPageHeader';
import { Outlet } from 'react-router-dom';
import MainPageNavigation from './partials/MainPageNavigation';

const MainPage: FC = () => {
  return (
    <Box sx={{ pt: 4, pb: 9 }}>
      <MainPageHeader />
      <Outlet />
      <MainPageNavigation />
    </Box>
  );
};

export default MainPage;
