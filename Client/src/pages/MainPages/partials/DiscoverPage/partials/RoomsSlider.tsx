import { Box, Button, Typography } from '@mui/material';
import { type FC } from 'react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import livingRoom from '../../../../../../public/LivingRoom.png';

const RoomsSlider: FC = () => {
  return (
    <Box sx={{ pt: 3, pb: 2 }}>
      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 2,
          px: 2
        }}
        component="h2"
        variant="fs14"
        fontWeight="bold">
        Rooms
      </Typography>
      <Swiper
        spaceBetween={8}
        slidesPerView={'auto'}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        freeMode={true}
        modules={[FreeMode]}
        className="freeModeSlider">
        <SwiperSlide>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button sx={{ p: 0, position: 'relative', color: 'white' }}>
              <img src={livingRoom} alt="" />
              <Typography variant="fs12" fontWeight="bold" sx={{ position: 'absolute' }}>
                Living
              </Typography>
            </Button>
            <Button sx={{ p: 0, position: 'relative', color: 'white' }}>
              <img src={livingRoom} alt="" />
              <Typography variant="fs12" fontWeight="bold" sx={{ position: 'absolute' }}>
                Living
              </Typography>
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button sx={{ p: 0, position: 'relative', color: 'white' }}>
              <img src={livingRoom} alt="" />
              <Typography variant="fs12" fontWeight="bold" sx={{ position: 'absolute' }}>
                Living
              </Typography>
            </Button>
            <Button sx={{ p: 0, position: 'relative', color: 'white' }}>
              <img src={livingRoom} alt="" />
              <Typography variant="fs12" fontWeight="bold" sx={{ position: 'absolute' }}>
                Living
              </Typography>
            </Button>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Button sx={{ p: 0, position: 'relative', color: 'white' }}>
              <img src={livingRoom} alt="" />
              <Typography variant="fs12" fontWeight="bold" sx={{ position: 'absolute' }}>
                Living
              </Typography>
            </Button>
            <Button sx={{ p: 0, position: 'relative', color: 'white' }}>
              <img src={livingRoom} alt="" />
              <Typography variant="fs12" fontWeight="bold" sx={{ position: 'absolute' }}>
                Living
              </Typography>
            </Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default RoomsSlider;
