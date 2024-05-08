import { Box, Button, Typography } from '@mui/material';
import { type FC } from 'react';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import carouselBanner01 from '../../../../../../public/CarouselBanner01.svg';
import carouselBanner02 from '../../../../../../public/CarouselBanner02.svg';
import carouselBanner03 from '../../../../../../public/CarouselBanner03.svg';

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
        <Box
          sx={{
            pt: 5.5,
            mb: 1.5,
            mx: 2,
            position: 'relative',
            borderRadius: 1,
            overflow: 'hidden'
          }}>
          <Box
            component="img"
            src={carouselBanner01}
            sx={{ position: 'absolute', right: 0, bottom: 0, width: '10.5rem' }}
          />
          <Box sx={{ bgcolor: '#FFCCDD', pl: 1, pt: 4, pb: 2, borderRadius: 1 }}>
            <Typography
              variant="fs18"
              fontWeight="bold"
              width="49%"
              paddingLeft={1}
              paddingBottom={2.25}>
              New collections are available!
            </Typography>
            <Button endIcon={<Icon icon="ooui:next-ltr" height="10" />}>Learn More</Button>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          sx={{
            pt: 5.5,
            mb: 1.5,
            mx: 2,
            position: 'relative',
            borderRadius: 1,
            overflow: 'hidden'
          }}>
          <Box
            component="img"
            src={carouselBanner02}
            sx={{ position: 'absolute', right: '1.5rem', bottom: 0, width: '6.125rem' }}
          />
          <Box sx={{ bgcolor: '#D8E1DB', pl: 1, pt: 4, pb: 2, borderRadius: 1 }}>
            <Typography
              variant="fs18"
              fontWeight="bold"
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
        <Box
          sx={{
            pt: 5.5,
            mb: 1.5,
            mx: 2,
            position: 'relative',
            borderRadius: 1,
            overflow: 'hidden'
          }}>
          <Box
            component="img"
            src={carouselBanner03}
            sx={{ position: 'absolute', right: 0, bottom: 0, width: '12rem' }}
          />
          <Box sx={{ bgcolor: '#FFE4CA', pl: 1, pt: 4, pb: 2, borderRadius: 1 }}>
            <Typography
              variant="fs18"
              fontWeight="bold"
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
