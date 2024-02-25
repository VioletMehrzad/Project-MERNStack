import { Box, Button } from '@mui/material';
import { type FC } from 'react';
import handleUnavailableFeature from '../../../helpers/handlers/handleUnavailableFeature';

const LoginOptions: FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      <Button onClick={handleUnavailableFeature} variant="containedIconCircular">
        <img src="./Google.svg" alt="" />
      </Button>
      <Button onClick={handleUnavailableFeature} variant="containedIconCircular">
        <img src="./Apple.svg" alt="" />
      </Button>
      <Button onClick={handleUnavailableFeature} variant="containedIconCircular">
        <img src="./Facebook.svg" alt="" />
      </Button>
    </Box>
  );
};

export default LoginOptions;
