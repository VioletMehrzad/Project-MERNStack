import { Box, Button } from '@mui/material';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RegisterHeader: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: 'neutral.aliceBlue',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          pl: 2,
          pt: 5.5,
          pb: 4
        }}>
        <Box>
          <Button
            variant="outlinedIcon"
            onClick={() => {
              navigate(-1);
            }}>
            <ArrowBackIcon />
          </Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{ marginBottom: '0.25rem' }} src="./Welcome.svg" alt="" />
          <img src="./Umah-Logo-lettermark.svg" alt="" />
        </Box>
      </Box>
      <img style={{ paddingTop: '3rem' }} src="./registerHeader.png" alt="" />
    </Box>
  );
};

export default RegisterHeader;
