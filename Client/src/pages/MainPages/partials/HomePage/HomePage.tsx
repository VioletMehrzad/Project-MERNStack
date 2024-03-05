import { Box } from '@mui/material';
import { type FC } from 'react';
import AccountOverview from './partials/AccountOverview';
import CarouselBanner from './partials/CarouselBanner';

const HomePage: FC = () => {
  return (
    <>
      <Box sx={{ py: 3 }}>
        <AccountOverview />
        <CarouselBanner />
      </Box>
    </>
  );
};

export default HomePage;
