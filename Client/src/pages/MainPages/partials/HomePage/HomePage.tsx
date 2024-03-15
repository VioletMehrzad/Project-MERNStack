import { Box } from '@mui/material';
import { type FC } from 'react';
import AccountOverview from './partials/AccountOverview';
import CarouselBanner from './partials/CarouselBanner';
import CategoriesSlider from './partials/CategoriesSlider';
import ProductsSlider from './partials/ProductsSlider';

const HomePage: FC = () => {
  return (
    <>
      <Box sx={{ pt: 3 }}>
        <AccountOverview />
        <CarouselBanner />
        <CategoriesSlider />
        <ProductsSlider />
      </Box>
    </>
  );
};

export default HomePage;
