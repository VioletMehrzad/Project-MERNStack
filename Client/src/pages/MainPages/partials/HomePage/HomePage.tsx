import { Box } from '@mui/material';
import { type FC } from 'react';
import AccountOverview from './partials/AccountOverview';
import CarouselBanner from './partials/CarouselBanner';
import CategoriesHomePage from './partials/CategoriesHomePage';

const HomePage: FC = () => {
  return (
    <>
      <Box sx={{ py: 3 }}>
        <AccountOverview />
        <CarouselBanner />
        <CategoriesHomePage />
      </Box>
    </>
  );
};

export default HomePage;
