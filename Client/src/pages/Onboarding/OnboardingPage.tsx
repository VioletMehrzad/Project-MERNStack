import { Box, Button, Typography } from '@mui/material';
import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingPage: FC = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (): void => {
    activeStep < 2 ? setActiveStep((prevActiveStep) => prevActiveStep + 1) : navigate('/login');
  };

  const onboardingOptions = [
    {
      img: "url('./onboarding1.png')",
      title: 'Tons of furniture collections',
      slider: './Slider-Group-1.svg'
    },
    {
      img: "url('./onboarding2.png')",
      title: 'Fast deliveries to your doorstep',
      slider: './Slider-Group-2.svg'
    },
    {
      img: "url('./onboarding3.png')",
      title: 'Bring aesthetics to your home',
      slider: './Slider-Group-3.svg'
    }
  ];

  return (
    <>
      <Box
        sx={{
          backgroundImage: onboardingOptions[activeStep].img,
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: 5,
          pb: 4,
          px: 2
        }}>
        <img
          style={{
            marginTop: '0.75rem',
            height: '2.75rem'
          }}
          src="./Umah-Logo.svg"
          alt=""
        />
        <Box
          sx={{
            backgroundImage: "url('./Fader.svg')",
            height: '50vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 2, pb: 4 }}>
            <Box textAlign="center" marginBottom={2}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', letterSpacing: '-0.3px', color: 'white' }}>
                {onboardingOptions[activeStep].title}
              </Typography>
              <Typography
                variant="subtitle3"
                letterSpacing={'-0.3px'}
                color="rgba(255, 255, 255, 0.6)"
                paddingX={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
              </Typography>
            </Box>
            <img src={onboardingOptions[activeStep].slider} alt="" />
          </Box>
          <Box sx={{ width: '100%', px: 2 }}>
            <Button variant="contained" onClick={handleNext} fullWidth sx={{ py: 2.5 }}>
              {activeStep === 2 ? 'Login' : 'Next'}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OnboardingPage;
