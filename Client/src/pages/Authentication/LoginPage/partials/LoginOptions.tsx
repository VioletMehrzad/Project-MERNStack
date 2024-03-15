import { Box, Button } from '@mui/material';
import { type FC } from 'react';
import handleUnavailableFeature from '../../../../helpers/handlers/handleUnavailableFeature';
import { Icon } from '@iconify/react';

const LoginOptions: FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      <Button onClick={handleUnavailableFeature} variant="containedRoundedIcon" color="tertiary">
        <Icon icon="flat-color-icons:google" height="24px" />
      </Button>
      <Button onClick={handleUnavailableFeature} variant="containedRoundedIcon" color="tertiary">
        <Icon icon="mdi:apple" height="auto" />
      </Button>
      <Button onClick={handleUnavailableFeature} variant="containedRoundedIcon" color="tertiary">
        <Icon icon="logos:facebook" height="24px" />
      </Button>
    </Box>
  );
};

export default LoginOptions;
