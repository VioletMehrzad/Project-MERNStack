import { Box, Button, Typography } from '@mui/material';
import { type FC } from 'react';
import { Icon } from '@iconify/react';
import ProductCard from '../../../../../components/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const ProductsSlider: FC = () => {
  return (
    <Box paddingY={2}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 1,
          px: 2
        }}>
        <Typography component="h2" variant="fs14" fontWeight="bold">
          Products
        </Typography>
        <Button endIcon={<Icon icon="ooui:next-ltr" height="10" />}>view all</Button>
      </Box>
      <Swiper
        spaceBetween={8}
        slidesPerView={'auto'}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        freeMode={true}
        modules={[FreeMode]}
        className="productsSlider">
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ProductsSlider;
