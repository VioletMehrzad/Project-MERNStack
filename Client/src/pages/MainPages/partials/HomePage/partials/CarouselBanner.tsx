import { Box, Button, Typography } from '@mui/material';
import { type FC } from 'react';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './carouselBannerStyles.css';

const CarouselBanner: FC = () => {
  return (
    <Swiper
      spaceBetween={20}
      autoplay={{
        delay: 2000
      }}
      pagination={{
        clickable: true
      }}
      modules={[Autoplay, Pagination]}>
      <SwiperSlide>
        <Box sx={{ pt: 5.5, mb: 1.5, position: 'relative', borderRadius: 3, overflow: 'hidden' }}>
          <Box
            component="img"
            src="./CarouselBanner01.svg"
            sx={{ position: 'absolute', right: 0, bottom: 0, width: '10.5rem' }}
          />
          <Box sx={{ bgcolor: '#FFCCDD', pl: 1, pt: 4, pb: 2, borderRadius: 3 }}>
            <Typography
              fontSize="1.125rem"
              fontWeight="bold"
              lineHeight="1.25em"
              width="50%"
              paddingLeft={1}
              paddingBottom={2}>
              New collections are available!
            </Typography>
            <Button endIcon={<Icon icon="ooui:next-ltr" height="10" />}>Learn More</Button>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ pt: 5.5, mb: 1.5, position: 'relative', borderRadius: 3, overflow: 'hidden' }}>
          <Box
            component="img"
            src="./CarouselBanner02.svg"
            sx={{ position: 'absolute', right: '1.5rem', bottom: 0, width: '6.125rem' }}
          />
          <Box sx={{ bgcolor: '#D8E1DB', pl: 1, pt: 4, pb: 2, borderRadius: 3 }}>
            <Typography
              fontSize="1.125rem"
              fontWeight="bold"
              lineHeight="1.25em"
              width="50%"
              paddingLeft={1}
              paddingBottom={2}>
              New upcoming products for 2024!
            </Typography>
            <Button endIcon={<Icon icon="ooui:next-ltr" height="10" />}>Learn More</Button>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{ pt: 5.5, mb: 1.5, position: 'relative', borderRadius: 3, overflow: 'hidden' }}>
          <Box
            component="img"
            src="./CarouselBanner03.svg"
            sx={{ position: 'absolute', right: 0, bottom: 0, width: '12rem' }}
          />
          <Box sx={{ bgcolor: '#FFE4CA', pl: 1, pt: 4, pb: 2, borderRadius: 3 }}>
            <Typography
              fontSize="1.125rem"
              fontWeight="bold"
              lineHeight="1.25em"
              width="50%"
              paddingLeft={1}
              paddingBottom={2}>
              #1 monthly top seller products!
            </Typography>
            <Button endIcon={<Icon icon="ooui:next-ltr" height="10" />}>Shop Now</Button>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselBanner;
