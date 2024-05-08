import { Box, Button, Typography } from '@mui/material';
import { type FC } from 'react';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';

const CategoriesSlider: FC = () => {
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
          Categories
        </Typography>
        <Button endIcon={<Icon icon="ooui:next-ltr" height="10" />}>view all</Button>
      </Box>
      <Swiper
        spaceBetween={20}
        slidesPerView={'auto'}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        freeMode={true}
        modules={[FreeMode]}
        className="freeModeSlider">
        <SwiperSlide>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5
            }}>
            <Button variant="containedRoundedIcon" color="tertiary">
              <Icon icon="material-symbols:table-restaurant" height="1.75rem" />
            </Button>
            <Typography variant="fs12" fontWeight="medium">
              Table
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5
            }}>
            <Button variant="containedRoundedIcon" color="tertiary">
              <Icon icon="solar:chair-bold" height="1.75rem" />
            </Button>
            <Typography variant="fs12" fontWeight="medium">
              Chair
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5
            }}>
            <Button variant="containedRoundedIcon" color="tertiary">
              <Icon icon="solar:sofa-bold" height="1.75rem" />
            </Button>
            <Typography variant="fs12" fontWeight="medium">
              Sofa
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5
            }}>
            <Button variant="containedRoundedIcon" color="tertiary">
              <Icon icon="bxs:cabinet" height="1.75rem" />
            </Button>
            <Typography variant="fs12" fontWeight="medium">
              Cabinet
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5
            }}>
            <Button variant="containedRoundedIcon" color="tertiary">
              <Icon icon="solar:lamp-bold" height="1.75rem" />
            </Button>
            <Typography variant="fs12" fontWeight="medium">
              Lamp
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5
            }}>
            <Button variant="containedRoundedIcon" color="tertiary">
              <Icon icon="mdi:wardrobe" height="1.75rem" />
            </Button>
            <Typography variant="fs12" fontWeight="medium">
              Wardrobe
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default CategoriesSlider;
